import { BtnsSwitcher } from '@components/BtnsSwitcher';
import { BUTTON_CONFIG_LIST_2 } from '@components/Dropdown/constants';
import { DropdownComponent } from '@components/Dropdown/Dropdown.component';
import { DropdownInputComponent } from '@components/DropdownSearch/DropdownInput.component';
import { Header } from '@components/Header';
import { SideMenu } from '@components/SideMenu';
import { Home } from '@pages/Home';
import React, { ClipboardEvent, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MarketplaceLayoutProps } from './MarketplaceLayout.types';

import styles from './MarketplaceLayout.module.scss';

export const MarketplaceLayoutComponent: React.FC<
  MarketplaceLayoutProps
> = () => {
  // const [buttonList1CurrentId, setButtonList1CurrentId] = useState<
  //   number | null
  // >(1);
  //
  // const [buttonList2CurrentId, setButtonList2CurrentId] = useState<
  //   number | null
  // >(2);
  //
  // const handleSetButtonList1CurrentId = (id: number | null) => {
  //   if (buttonList1CurrentId === id) {
  //     setButtonList1CurrentId(null);
  //     return;
  //   }
  //   setButtonList1CurrentId(id);
  // };
  //
  // const handleSetButtonList2CurrentId = (id: number | null) => {
  //   if (buttonList2CurrentId === id) {
  //     setButtonList2CurrentId(null);
  //     return;
  //   }
  //   setButtonList2CurrentId(id);
  // };

  return (
    <>
      <div className={styles.wrap}>
        <SideMenu userName={'Amanda Crouise'} />
        <Header />
        {/*<Home />*/}
        <div className={styles.content}>
          <Outlet />
        </div>
        {/*<div className={styles.container}>*/}
        {/*  <div className={styles.board}>*/}
        {/*    <div className={styles.duck}></div>*/}
        {/*  </div>*/}
        {/*  /!*<img src="../../../public/images/homepage/board.jpg" alt="board" />*!/*/}
        {/*  <div className={styles.searchTitle}>*/}
        {/*    <div>*/}
        {/*      <h3>Top NFT per 24 hours</h3>*/}
        {/*      <div className={styles.subTitle}>*/}
        {/*        Showed more than 10 938 collections*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <BtnsSwitcher*/}
        {/*      buttonConfigList={BUTTON_CONFIG_LIST_2}*/}
        {/*      currentButtonId={buttonList2CurrentId}*/}
        {/*      setCurrentButtonId={handleSetButtonList2CurrentId}*/}
        {/*      size={'sm'}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

MarketplaceLayoutComponent.displayName = 'MarketplaceLayout';
