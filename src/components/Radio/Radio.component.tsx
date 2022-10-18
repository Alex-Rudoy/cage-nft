import React from 'react';
import classNames from 'classnames';

import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import { RadioProps } from './Radio.types';

import styles from './Radio.module.scss';

export const RadioComponent: React.FC<RadioProps> = ({
  className,
  onChange,
  value,
  checked,
  text,
  disabled,
  description,
}) => {
  const radioClass = classNames(
    styles.radio,
    {
      [styles.disabled]: disabled,
      [styles.checked]: checked,
    },
    className
  );

  return (
    <div className={radioClass}>
      <input
        type="radio"
        value={value}
        name={value}
        id={value}
        onChange={disabled ? () => null : onChange}
        checked={checked}
      />
      <label htmlFor={value}>
        <div className={styles.circle_outer}>
          <div className={styles.circle_inner} />
        </div>
        {text && (
          <div>
            <Text
              variant={TextVariantsEnum.Text_sm}
              fontWeight={FontWeightEnum.Medium}
            >
              {text}
            </Text>
            {description && (
              <Text
                variant={TextVariantsEnum.Text_sm}
                fontWeight={FontWeightEnum.Normal}
                color="gray-500"
              >
                {description}
              </Text>
            )}
          </div>
        )}
      </label>
    </div>
  );
};

RadioComponent.displayName = 'Radio';
