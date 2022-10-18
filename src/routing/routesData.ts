import React from 'react';

import { routes } from './routes';

export type RouteDataType = {
  path: string;
  Component: React.FC<any>;
  isPrivate: boolean;
  navigationMenu?: boolean;
  children?: { path: string; Component: React.FC<any> }[];
}

export const routerData: RouteDataType[] = [
  // Marketplace
  // { path: routes().home, Component: LoginPage, isPrivate: false },
];
