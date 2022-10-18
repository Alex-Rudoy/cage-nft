import { IconsEnum } from '@components/SvgIcon';

export type TableControlsProps = {
  icons: {
    icon: IconsEnum;
    onClick: () => void;
  }[];
};
