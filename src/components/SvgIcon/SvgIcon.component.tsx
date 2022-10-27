import React from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import { SvgIconProps } from './SvgIcon.types';

import styles from './SvgIcon.module.scss';

export const SvgIconComponent: React.FC<SvgIconProps> = ({
  src,
  size = 24,
  height = size,
  color = 'inherit',
  rotate,
  className,
  style,
  onClick,
  defaultStoke,
  useCustomColor,
  filledByCustomColor,
}) => {
  const svgIconClass = classNames(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
      [styles.defaultStroke]: defaultStoke,
    },
    className
  );

  const stroke = defaultStoke
    ? {}
    : {
        stroke: `var(--${useCustomColor ? 'svgCustomColor' : color})`,
      };
  const customStyles = {
    width: `${size}px`,
    height: `${height}px`,
    ...style,
    ...stroke,
  };

  return (
    <ReactSVG
      src={src}
      className={classNames(svgIconClass, {
        [styles.filledCustomColor]: useCustomColor && filledByCustomColor,
      })}
      onClick={onClick}
      style={customStyles}
    />
  );
};

SvgIconComponent.displayName = 'SvgIcon';
