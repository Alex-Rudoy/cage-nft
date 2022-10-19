import React from 'react';
import classNames from 'classnames';

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
            <p>{text}</p>
            {description && <p>{description}</p>}
          </div>
        )}
      </label>
    </div>
  );
};

RadioComponent.displayName = 'Radio';
