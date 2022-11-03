import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import React from 'react';
import classNames from 'classnames';

import { ThemeToggleProps } from './ThemeToggle.types';

import styles from './ThemeToggle.module.scss';

export const ThemeToggleComponent: React.FC<ThemeToggleProps> = ({
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
          {checked ? (
            <div className={styles.icoBlock}>
              <SvgIcon src={IconsEnum.moon} />
              <SvgIcon src={IconsEnum.sun} />
            </div>
          ) : (
            <div className={styles.icoBlock}>
              <SvgIcon src={IconsEnum.moon} />
              <SvgIcon src={IconsEnum.sun} color={'primary'} />
            </div>
          )}
          <div className={styles.circle} />
        </div>
        {/*<div className={styles.rail}>*/}
        {/*  <SvgIcon src={IconsEnum.moon}  />*/}
        {/*  <SvgIcon src={IconsEnum.sun} />*/}
        {/*  <div className={styles.ThemeToggler} />*/}
        {/*</div>*/}
        {text && <p>{text}</p>}
      </label>
    </div>
  );
};

ThemeToggleComponent.displayName = 'ThemeToggle';
