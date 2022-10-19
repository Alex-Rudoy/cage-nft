import React from 'react';

import { IconsEnum } from '@components/SvgIcon';

export type DropdownCallerProps = {
  text: string;
  icon?: IconsEnum;
  iconOnly?: boolean;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
};
