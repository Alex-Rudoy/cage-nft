import React from 'react';
import classNames from 'classnames';

import { BtnsSwitcherProps } from './BtnsSwitcher.types';

import styles from './BtnsSwitcher.module.scss';

export const BtnsSwitcherComponent: React.FC<BtnsSwitcherProps> = ({
                                                                     buttonsList,
                                                                     handleBtnClk,
                                                                     active,
                                                                     size
                                                     }) => {
  
  return (
    <div className={styles.wrap} >
      {buttonsList.map((el )=>
        <button
          className={classNames(styles.switch_btn,
            {
              [styles.switch_btn_active]: active === el.id,
              [styles[`switch_btn_${size}`]]: size,
            }
          )}
          key={el.id}
          onClick = {()=>handleBtnClk(el.id)}>{el.text}
        </button>)}
    </div>
  );
};

BtnsSwitcherComponent.displayName = 'Badge';
