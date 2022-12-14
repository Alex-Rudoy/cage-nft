import React from 'react';
import classNames from 'classnames';

import { SvgIcon } from '@components/SvgIcon';

import { BadgeProps } from './Badge.types';

import styles from './Badge.module.scss';

export const BadgeComponent: React.FC<BadgeProps> = ({
  className,
  color,
  dots,
  icon,
  iconPosition = 'left',
  id,
  text,
  onClick = () => null,
}) => {
  const badgeClass = classNames(
    styles.badge,
    {
      [styles[`badge_color_${color}`]]: color,
      // this is not mistake, apply styles only if icon present
      [styles[`badge_icon_position_${iconPosition}`]]: icon,
      [styles[`badge_dots`]]: dots,
    },
    className
  );

  return (
    <div className={badgeClass} id={id} onClick={onClick}>
      {icon && <SvgIcon src={icon} size={12} color="inherit" />}
      {text && <p>{text}</p>}
    </div>
  );
};

BadgeComponent.displayName = 'Badge';
