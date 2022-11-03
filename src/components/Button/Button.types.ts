import { IconsEnum } from '@components/SvgIcon';

export enum ButtonVariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  secondaryFilt = 'secondaryFilt',
  bell = 'bell',
  light = 'light',
}

export type ButtonProps = {
  text?: string;
  id?: string;
  variant?: ButtonVariantEnum;
  size?: 'exsm' | 'sm' | 'md' | 'mds' | 'lg';
  width?: 'full' | 'content';
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
