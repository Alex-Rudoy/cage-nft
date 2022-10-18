import React from 'react';
import { IconsEnum } from '@components/SvgIcon';
import { FontWeightEnum, TextVariantsEnum } from '@components/Text';

export type DropdownCallerProps = {
  text: string;
  icon?: IconsEnum;
  iconOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
  textVariant?: TextVariantsEnum;
  fontWeight?: FontWeightEnum;
  placeholder?: string;
};
