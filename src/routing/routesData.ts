import React from 'react';

import { MarketplaceLayout } from '@layout/MarketplaceLayout';
import { Home } from '@pages/Home';

import { routes } from './routes';

export type RouteDataType = {
  path: string;
  Component: React.FC;
  children?: { path: string; Component: React.FC }[];
};

export const routerData: RouteDataType[] = [
  // Marketplace
  {
    path: null,
    Component: MarketplaceLayout,
    children: [{ path: routes().home, Component: Home }],
  },
];
