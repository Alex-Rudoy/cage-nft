import { ButtonProps } from '@components/Button';
import { IconsEnum } from '@components/SvgIcon';

export type PageHeaderProps = {
  buttonGroup?: ButtonProps[];
  buttonText?: string;
  buttonId?: string;
  className?: string;
  icon?: IconsEnum;
  onClick?: () => void;
  title: string;
  titleLink?: string;
  helpStripId?: string;
};
