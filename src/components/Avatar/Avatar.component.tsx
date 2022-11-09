import React from 'react';
import classNames from 'classnames';

import { AvatarProps } from './Avatar.types';

import styles from './Avatar.module.scss';

export const AvatarComponent: React.FC<AvatarProps> = ({
  src = '/public/images/card/ava.png',
  className,
  msgsValue,
  isOnline,
}) => {
  const onlineFlagCircle = classNames(styles.onlineBadge, {
    [styles[`onlineBadge__offline`]]: !isOnline,
  });
  return (
    <div className={styles.avatar}>
      {src ? (
        <>
          <img src={src} alt="ava" />
          {msgsValue && <div className={styles.msgBadge}>{msgsValue}</div>}
        </>
      ) : (
        <>
          <div className={styles.mediumCircle}></div>
          {isOnline && <div className={styles.onlineBadge}></div>}
          <div className={styles.upCircle}></div>
        </>
      )}
      {/*{src && <img src="{src}" alt="userAvatar" />}*/}
      {/*<div className={styles.mediumCircle}></div>*/}
      {/*<div className={onlineFlagCircle}></div>*/}
      {/*<div className={styles.upCircle}></div>*/}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
