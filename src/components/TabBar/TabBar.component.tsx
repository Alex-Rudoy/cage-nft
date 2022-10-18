import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import { TabBarProps } from './TabBar.types';

import styles from './TabBar.module.scss';

export const TabBarComponent: React.FC<TabBarProps> = ({
  id,
  className,
  selectedTab,
  options,
  onTabClick,
  labelsTranslateNS,
}) => {
  const { t: translate } = useTranslation();
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
          <Text
            variant={TextVariantsEnum.Text_md}
            fontWeight={FontWeightEnum.Medium}
            color="inherit"
          >
            {labelsTranslateNS
              ? translate(option.label, { ns: labelsTranslateNS })
              : option.label}
          </Text>
          <div className={styles.underline} />
        </div>
      ))}
    </div>
  );
};

TabBarComponent.displayName = 'TabBar';
