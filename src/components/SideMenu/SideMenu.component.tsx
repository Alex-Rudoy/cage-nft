import {Avatar} from '@components/Avatar'
import {SideMenuItem} from '@components/SideMenuItem'
import {SideMenuItemComponent} from '@components/SideMenuItem/SideMenuItem.component'
import {IconsEnum, SvgIcon} from '@components/SvgIcon'
import React, {useState} from 'react'
import classNames from 'classnames';

import { SideMenuProps } from './SideMenu.types';

import styles from './SideMenu.module.scss';
import Items from './SideMenuData.json';

export const SideMenuComponent: React.FC<SideMenuProps> = ({
                                                       userName
                                                       }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} className={classNames(styles.wrap,{[styles.wrap_hide]: open})}>
      <header>
          {
            open ?
              <SvgIcon src={IconsEnum.logosm} color={'gray-95'} />
              :
              <SvgIcon src={IconsEnum.logo} color={'gray-95'} size={83} height={13.9} />
          }
      </header>
      <div className={styles.mailContent}>
        <Avatar name={'Alex'} src={'images/user/ava.png'}/>
        <div className={classNames(styles.user,{[styles.user_hide]: open})}>
          <span className={styles.name}>{userName}</span><br/>
          <span className={styles.mail}>@amanda0xw</span>
        </div>
      </div>
      <nav>
        <div onClick={e => !open && e.stopPropagation()}>
          {Items.map((item,i) => <SideMenuItem key={i} item={item}  open={open} />)}
        </div>
      </nav>
      <footer>
        
        <div>The Cage 2022ⒸAll rights reserved</div>
      </footer>
    </div>
   );
};

SideMenuComponent.displayName = 'SideMenu';
