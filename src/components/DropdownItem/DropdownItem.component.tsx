import React from 'react';
import classNames from 'classnames';

import { SvgIcon } from '@components/SvgIcon';

import { DropdownItemProps } from './DropdownItem.types';

import styles from './DropdownItem.module.scss';

export const DropdownItemComponent: React.FC<DropdownItemProps> = ({
  icon,
  text,
  onClick,
  className,
}) => {
  const dropdownItemClass = classNames(styles.dropdownItem, className);

  return (
    <div className={dropdownItemClass} onClick={onClick}>
      {icon && <SvgIcon src={icon} size={16} />}
      <p>{text}</p>
    </div>
  );
};

DropdownItemComponent.displayName = 'DropdownItem';
