import {Avatar} from '@components/Avatar'
import {IconsEnum, SvgIcon} from '@components/SvgIcon'
import React, {useState} from 'react'
import cn from 'classnames';

import { SideMenuItemProps } from './SideMenuItem.types';

import styles from './SideMenuItem.module.scss';

export const SideMenuItemComponent: React.FC<any> = ({
                                                             item,open
                                                           }) => {
  const [active, setActive] = useState(false)
  console.log(item.icon)
  
  return (
  <>
    {
      item.children ? (
        <div className={cn(styles.wrap,{[styles.wrap_active]: active})} onClick={ () => setActive(!active)}>
          <div className={styles.sidebarItem}>
            <div className={cn(styles.title,{[styles.title_active]: active && !open})}>
              <div className={styles.titleContent}>
                {item.icon && <SvgIcon className={styles.icon} src={IconsEnum[item.icon]}/>}
                <span className={`${open ? styles.hide : ''}`}>{item.title}</span>
              </div>
              <SvgIcon className={`${open ? styles.hide : ''}`} src={IconsEnum.arrdown} size={11}/>
            </div>
            <div className={cn(styles.content,styles.content_sub)}>
              {item.children.map((child,i) => <SideMenuItemComponent key={i} item={child} />)}
            </div>
          </div>
  
        </div>
      ):(
        <a href={item.href} className={styles.wrap} >
          <div className={styles.sidebarItem}>
              <div className={styles.title}>
              <div className={styles.titleContent}>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        </a>
      )
    }
   
  </>
);
};

SideMenuItemComponent.displayName = 'SideMenuItem';
