import React from 'react';

import { IconsEnum } from '@components/SvgIcon';

import { simpleOption } from '@typings/dictionary';

export type MultiDropdownProps<T extends string | number> = {
  options: simpleOption<T>[];
  value: simpleOption<T>[];
  iconOnly?: boolean;
  setValue: (value: T[]) => void;
  className?: string;
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
  placeholder?: string;
  removeOption: (currentOption: simpleOption) => void;
};
