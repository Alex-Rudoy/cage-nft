import classNames from 'classnames';
import React from 'react';

import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import { ToggleProps } from './Toggle.types';

import styles from './Toggle.module.scss';

export const ToggleComponent: React.FC<ToggleProps> = ({
  className,
  onClick,
  checked,
  disabled,
  id,
  text,
}) => {
  const toggleClass = classNames(
    styles.toggle,
    {
      [styles.disabled]: disabled,
      [styles.checked]: checked,
    },
    className
  );

  return (
    <div className={toggleClass}>
      <input
        type="checkbox"
        checked={checked}
        name={id}
        id={id}
        disabled={disabled}
        onChange={disabled ? () => null : () => onClick(id)}
      />

      <label htmlFor={id}>
        <div className={styles.rail}>
          <div className={styles.circle} />
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

ToggleComponent.displayName = 'Toggle';
