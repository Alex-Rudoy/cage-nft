import { IconsEnum } from '@components/SvgIcon';

export type DropdownItemProps = {
  text: string;
  icon?: IconsEnum | string;
  onClick?: () => void;
  className?: string;
};
