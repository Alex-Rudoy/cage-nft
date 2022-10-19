import React from 'react';
import classNames from 'classnames';

import { TabBarProps } from './TabBar.types';

import styles from './TabBar.module.scss';

export const TabBarComponent: React.FC<TabBarProps> = ({
  id,
  className,
  selectedTab,
  options,
  onTabClick,
}) => {
  const tabBarClass = classNames(styles.tabBar, className);

  return (
    <div className={tabBarClass} id={id}>
      {options.map((option) => (
        <div
          key={option.value}
          className={classNames(styles.tab, {
            [styles.tab_active]: option.value === selectedTab,
          })}
          onClick={() => onTabClick(option.value)}
        >
          <p>{option.label}</p>
          <div className={styles.underline} />
        </div>
      ))}
    </div>
  );
};

TabBarComponent.displayName = 'TabBar';
