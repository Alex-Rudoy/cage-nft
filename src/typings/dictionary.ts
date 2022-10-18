import { IconsEnum } from '@components/SvgIcon';

export type simpleOption<T = string | number> = {
  value: T;
  label: string;
  icon?: IconsEnum | string;
};

export type LabelWithLocales = { en: string };

export type localizedOption<T = string | number> = {
  value: T;
  label: LabelWithLocales;
  icon?: IconsEnum | string;
};

export type simpleOptionWithStringValue = simpleOption<string>;
export type localizedOptionWithStringValue = localizedOption<string>;

export type simpleOptionWithNumericValue = simpleOption<number>;
export type localizedOptionWithNumbericValue = localizedOption<number>;
