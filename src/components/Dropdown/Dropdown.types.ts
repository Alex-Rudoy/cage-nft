import { simpleOption } from '@typings/dictionary';

export type DropdownProps<T extends string | number> = {
  options: simpleOption<T>[];
  preFilteredOptions?: simpleOption<T>[];
  value: T;
  iconOnly?: boolean;
  setValue: (value: T) => void;
  className?: string;
  placeholder?: string;
  containerClass?: string;
  width?: number;
  showSearch?: boolean;
  emptyStateText?: string;
};
