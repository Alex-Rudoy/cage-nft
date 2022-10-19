import React from 'react';
import classNames from 'classnames';

import { AvatarProps } from './Avatar.types';

import styles from './Avatar.module.scss';

export const AvatarComponent: React.FC<AvatarProps> = ({
  name,
  lastName = null,
  src,
  className,
}) => {
  const avatarClass = classNames(styles.avatar, className);

  return (
    <div className={avatarClass}>
      {src ? (
        <img src={src} alt="" />
      ) : (
        <p>
          {name && (name[0] + (lastName ? lastName[0] : name[1])).toUpperCase()}
        </p>
      )}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
