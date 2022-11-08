import { Avatar } from '@components/Avatar';
import { SideMenuItem } from '@components/SideMenuItem';
import { SideMenuItemComponent } from '@components/SideMenuItem/SideMenuItem.component';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import React, { useState } from 'react';
import cn from 'classnames';

import { SideMenuProps } from './SideMenu.types';

import styles from './SideMenu.module.scss';
import Items from './SideMenuData.json';

export const SideMenuComponent: React.FC<SideMenuProps> = ({ userName }) => {
  const [open, setOpen] = useState(true);
  const socialArr = ['Twitter', 'Discord', 'Youtube', 'Telegram'];
  return (
    <div
      onClick={() => setOpen(!open)}
      className={cn(styles.wrap, { [styles.wrap_hide]: open })}
    >
      <div
        className={cn(styles.contentContainer, {
          [styles.contentContainer_hide]: open,
        })}
      >
        <header
          className={cn(styles.header, { [styles.header_hide]: open })}
        ></header>
        <div className={styles.mailContent}>
          <Avatar src={'/images/user/ava.png'} />
          <div className={cn(styles.user, { [styles.hide]: open })}>
            <span className={styles.name}>{userName}</span>
            <br />
            <span className={styles.mail}>@amanda0xw</span>
          </div>
        </div>
        <nav>
          <div onClick={(e) => !open && e.stopPropagation()}>
            {Items.map((item, i) => (
              <SideMenuItem key={i} item={item} open={open} />
            ))}
          </div>
        </nav>
      </div>
      <footer>
        <div className={cn(styles.social, { [styles.social_hidden]: open })}>
          {socialArr.map((el, i) => (
            <div key={i} className={styles.ico}>
              {' '}
              <SvgIcon src={IconsEnum[el]} />
              <span className={cn(styles.user, { [styles.hide]: open })}>
                {el}
              </span>
            </div>
          ))}
          <div className={styles.rights}>
            <span
              className={cn(styles.license, { [styles.license_hidden]: open })}
            >
              The Cage 2022
            </span>
            Ⓒ
            <span
              className={cn(styles.license, { [styles.license_hidden]: open })}
            >
              All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

SideMenuComponent.displayName = 'SideMenu';
