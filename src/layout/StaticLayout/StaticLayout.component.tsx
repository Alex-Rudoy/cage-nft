import { Header } from '@components/Header';
import { SideMenu } from '@components/SideMenu';
import React, { useState } from 'react';
import styles from './StaticLayout.module.scss';
import { Outlet } from 'react-router-dom';
// import {StaticLayoutProps} from './StaticLayout.types'

export const StaticLayoutComponent: React.FC<any> = () => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.menu}>
          <SideMenu userName={'Will Smith'} />
        </div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

StaticLayoutComponent.displayName = 'StaticLayout';
