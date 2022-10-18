import React from 'react';
import classNames from 'classnames';

import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

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
        <Text
          variant={TextVariantsEnum.Text_md}
          fontWeight={FontWeightEnum.Medium}
          color="primary-600"
        >
          {name && (name[0] + (lastName ? lastName[0] : name[1])).toUpperCase()}
        </Text>
      )}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
