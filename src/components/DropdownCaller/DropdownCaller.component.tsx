import React from 'react';
import classNames from 'classnames';

import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { DropdownCallerProps } from './DropdownCaller.types';

import styles from './DropdownCaller.module.scss';

export const DropdownCallerComponent: React.FC<DropdownCallerProps> = ({
  icon,
  iconOnly,
  text,
  className,
  style,
  placeholder,
}) => {
  const dropdownCallerClass = classNames(styles.dropdownCaller, className);
  return (
    <div className={dropdownCallerClass} style={style}>
      {icon && <SvgIcon src={icon} size={16} color="inherit" />}

      {!iconOnly && text && <p>{text}</p>}

      {!text && <p>{placeholder}</p>}

      <SvgIcon src={IconsEnum.arrowChevron} size={20} />
    </div>
  );
};

DropdownCallerComponent.displayName = 'DropdownCaller';
