import { IconsEnum } from '@components/SvgIcon';

export enum ButtonVariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  secondaryFilt = 'secondaryFilt',
  bell = 'bell',
  light = 'light',
  lightBordered = 'lightBordered',
}

export type ButtonProps = {
  text?: string;
  id?: string;
  variant?: ButtonVariantEnum;
  size?: 'exsm' | 'sm' | 'md' | 'mds' | 'lg' | 'lg-2' | 'mob' | 'lgETH';
  width?: 'full' | 'content' | 'md';
  icon?: IconsEnum;
  iconPosition?: 'left' | 'right';
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
};
