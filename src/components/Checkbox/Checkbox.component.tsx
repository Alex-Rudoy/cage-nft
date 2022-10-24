import React from 'react';
import classNames from 'classnames';

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
            color={disabled ? 'gray-30' : 'white'}
          />
        </div>
        {text && <p>{text}</p>}
      </label>
    </div>
  );
};

CheckboxComponent.displayName = 'Checkbox';
