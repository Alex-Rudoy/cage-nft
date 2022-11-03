import React from 'react';
import classNames from 'classnames';

import { BtnsSwitcherProps } from './BtnsSwitcher.types';

import styles from './BtnsSwitcher.module.scss';

export const BtnsSwitcherComponent: React.FC<BtnsSwitcherProps> = ({
  buttonConfigList,
  currentButtonId,
  setCurrentButtonId,
  size,
}) => {
  return (
    <div className={styles.wrap}>
      {buttonConfigList.map((el) => (
        <button
          className={classNames(styles.switch_btn, {
            [styles.switch_btn_active]: currentButtonId === el.id,
            [styles[`switch_btn_${size}`]]: size,
          })}
          key={el.id}
          onClick={() => setCurrentButtonId(el.id)}
        >
          {el.title}
        </button>
      ))}
    </div>
  );
};

BtnsSwitcherComponent.displayName = 'BtnsSwitcher';
