import React from 'react';
import classNames from 'classnames';

import { AvatarProps } from './Avatar.types';

import styles from './Avatar.module.scss';

export const AvatarComponent: React.FC<AvatarProps> = ({
  name,
  lastName = null,
  src,
  className,
  isOnline = true,
}) => {
  const onlineFlagCircle = classNames(styles.onlineBadge, {
    [styles[`onlineBadge__offline`]]: !isOnline,
  });
  return (
    <div className={styles.avatar}>
      {/*{src ? (*/}
      {/*  <img src="{src}" alt="" />*/}
      {/*) : (*/}
      {/*  <p>*/}
      {/*    {name && (name[0] + (lastName ? lastName[0] : name[1])).toUpperCase()}*/}
      {/*  </p>*/}
      {/*)}*/}
      {src ? (
        <>
          <img src={src} alt="userAvatar" />
          <div className={styles.msgBadge}>3</div>
        </>
      ) : (
        <>
          <div className={styles.mediumCircle}></div>
          <div className={styles.onlineBadge}></div>
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
