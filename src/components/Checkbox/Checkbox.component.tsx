import classNames from 'classnames';
import React from 'react';

import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { CheckboxProps } from './Checkbox.types';

import styles from './Checkbox.module.scss';

export const CheckboxComponent: React.FC<CheckboxProps> = ({
  className,
  checked,
  id,
  text,
  disabled,
  onClick,
}) => {
  const checkboxClass = classNames(
    styles.checkbox,
    {
      [styles.disabled]: disabled,
      [styles.checked]: checked,
    },
    className
  );

  return (
    <div className={checkboxClass}>
      <input
        type="checkbox"
        checked={checked}
        name={id}
        id={id}
        disabled={disabled}
        onChange={disabled ? () => null : () => onClick(id)}
      />
      <label htmlFor={id}>
        <div className={styles.checkbox_box}>
          <SvgIcon
            src={IconsEnum.checkboxV}
            size={12}
            color={disabled ? 'gray-300' : 'primary-600'}
          />
        </div>
        {text && (
          <Text
            variant={TextVariantsEnum.Text_sm}
            fontWeight={FontWeightEnum.Medium}
          >
            {text}
          </Text>
        )}
      </label>
    </div>
  );
};

CheckboxComponent.displayName = 'Checkbox';
