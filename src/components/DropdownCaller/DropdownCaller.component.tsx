import React from 'react';
import classNames from 'classnames';

import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import { DropdownCallerProps } from './DropdownCaller.types';

import styles from './DropdownCaller.module.scss';

export const DropdownCallerComponent: React.FC<DropdownCallerProps> = ({
  icon,
  iconOnly,
  text,
  className,
  style,
  textVariant = TextVariantsEnum.Text_xs,
  fontWeight = FontWeightEnum.Medium,
  placeholder,
}) => {
  const dropdownCallerClass = classNames(styles.dropdownCaller, className);
  return (
    <div className={dropdownCallerClass} style={style}>
      {icon && <SvgIcon src={icon} size={16} color="inherit" />}

      {!iconOnly && text && (
        <Text variant={textVariant} fontWeight={fontWeight}>
          {text}
        </Text>
      )}

      {!text && (
        <Text variant={textVariant} fontWeight={fontWeight} color={'gray-500'}>
          {placeholder}
        </Text>
      )}

      <SvgIcon src={IconsEnum.arrowChevron} size={20} />
    </div>
  );
};

DropdownCallerComponent.displayName = 'DropdownCaller';
