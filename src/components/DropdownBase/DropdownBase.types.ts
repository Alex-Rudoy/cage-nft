export type DropdownBaseProps = {
  caller: JSX.Element;
  maxHeight?: number;
  customState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  disabled?: boolean;
  placement?:
    | 'auto-end'
    | 'auto-start'
    | 'auto'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  offsetMain?: number;
  offsetSide?: number;
  dontCloseOnInnerClick?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClickOutsideCallback?: () => void;
};
