import { MarketplaceNFT } from '@pages/MarketplaceNFT';
import { MarketplaceNFTComponent } from '@pages/MarketplaceNFT/MarketplaceNFT.component';
import React from 'react';

import { MarketplaceLayout } from '@layout/MarketplaceLayout';
import { Home } from '@pages/Home';
import { NFTPage } from '@pages/NFTPage';
import { AccountLayout } from '@layout/AccountLayout';

import { routes } from './routes';

export type RouteDataType = {
  path?: string;
  Component: React.FC;
  children?: { path?: string; Component: React.FC }[];
};

export const routerData: RouteDataType[] = [
  // Marketplace
  {
    path: null,
    Component: MarketplaceLayout,
    children: [
      { path: routes().home, Component: Home },
      { path: routes().marketplaceNft, Component: MarketplaceNFT },
    ],
  },
  // {
  //   path: null,
  //   Component: AccountLayout,
  //   children: [{ path: routes().account, Component: AccountLayout }],
  // },
];
