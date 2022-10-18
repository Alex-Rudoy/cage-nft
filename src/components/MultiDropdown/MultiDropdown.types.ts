import React from 'react';

import { IconsEnum } from '@components/SvgIcon';
import { FontWeightEnum, TextVariantsEnum } from '@components/Text';

import { simpleOption } from '@typings/dictionary';

export type MultiDropdownProps<T extends string | number> = {
  options: simpleOption<T>[];
  value: simpleOption<T>[];
  iconOnly?: boolean;
  setValue: (value: T[]) => void;
  className?: string;
  textVariant?: TextVariantsEnum;
  fontWeight?: FontWeightEnum;
  placeholder?: string;
  containerClass?: string;
  width?: number;
};

export type MultiDropdownCallerProps<T extends string | number> = {
  options: simpleOption<T>[];
  icon?: IconsEnum;
  iconOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
  textVariant?: TextVariantsEnum;
  fontWeight?: FontWeightEnum;
  placeholder?: string;
  removeOption: (currentOption: simpleOption) => void;
};
