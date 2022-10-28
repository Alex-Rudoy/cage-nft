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
  console.log("open",open)
  
  return (
  <>
    {
      item.children ? (
        <div className={cn(styles.wrap,{[styles.wrap_active]: active && !open})} onClick={ () => setActive(!active)}>
          <div className={styles.sidebarItem}>
            <div className={cn(styles.title,{[styles.title_active]: active})}>
              <div className={styles.titleContent}>
                {item.icon && <SvgIcon className={styles.icon} src={IconsEnum[item.icon]} size={24}/>}
                <span className={cn(styles.text,{[styles.text_show]: open})}>{item.title}</span>
                {/*<span className={`${open ? styles.hide : ''}`}>{item.title}</span>*/}
              </div>
              <SvgIcon className={cn(styles.arrow,{[styles.arrow_show]: open})} src={IconsEnum.arrdown} size={11}/>
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
                {item.icon && <SvgIcon className={styles.icon} src={IconsEnum[item.icon]} size={24}/>}
                <span className={cn(styles.text,{[styles.text_show]: open})}>{item.title}</span>
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
