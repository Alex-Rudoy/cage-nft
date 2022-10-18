import axios, { AxiosRequestConfig, AxiosError, HeadersDefaults } from 'axios';

import { auth, awaitFirebaseInitialization } from '@config/firebase';

import { routes } from '@routing/routes';

const UNAUTHORIZED_CODE = 403;

type RequestQueueType = (accessToken: string) => void;
interface ICustomHeader extends HeadersDefaults {
  Authorization: string;
}

let isTokenRefreshing = false;
let requestQueue: RequestQueueType[] = [];

const authApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const handleRefreshTokenError = () => {
  localStorage.removeItem('lifesightCPDUser');

  const paths = window.location.href.split('/');

  window.location.href = `${paths[0]}//${paths[2]}${routes().login}`;
};

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  try {
    await awaitFirebaseInitialization();

    const currentUser = auth.currentUser;

    if (currentUser) {
      const access_token = await currentUser.getIdToken();

      if (access_token) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${access_token}`,
          },
        };
      }
    }

    return config;
  } catch (error) {
    return config;
  }
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { response } = error;

    await awaitFirebaseInitialization();

    const currentUser = auth.currentUser;

    if (!response || !currentUser) throw error;

    const { status, config } = response;

    if (status === UNAUTHORIZED_CODE && !isTokenRefreshing) {
      isTokenRefreshing = true;

      try {
        try {
          const access_token = await currentUser.getIdToken(true);

          (api.defaults.headers as ICustomHeader)[
            'Authorization'
          ] = `Bearer ${access_token}`;

          // Set requests queue to avoid multiple refreshing
          requestQueue.forEach((request) => request(access_token));
          requestQueue = [];

          return await api({
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${access_token}`,
            },
            baseURL: process.env.REACT_APP_BASE_URL,
          });
        } catch (refreshTokenError) {
          const refreshStatus = refreshTokenError.response?.status;

          if (refreshStatus === UNAUTHORIZED_CODE) {
            handleRefreshTokenError();
          }

          throw refreshTokenError;
        }
      } finally {
        isTokenRefreshing = false;
      }
    }

    if (status === UNAUTHORIZED_CODE && isTokenRefreshing)
      return new Promise((resolve) => {
        requestQueue.push((access: string) => {
          resolve(
            api({
              ...config,
              headers: {
                ...config.headers,
                Authorization: `Bearer ${access}`,
              },
              baseURL: process.env.REACT_APP_BASE_URL,
            })
          );
        });
      });

    throw error;
  }
);

export { authApi, api };
