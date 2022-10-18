import { AxiosResponse } from 'axios';

export type BackendResponse<T> = AxiosResponse<{
  data: T;
  success: boolean;
  errors: string[];
  total: number;
  current: number;
  next: boolean;
  prev: boolean;
  size: number;
}>;
