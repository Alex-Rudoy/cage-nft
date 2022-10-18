export type ToggleProps = {
  checked: boolean;
  disabled?: boolean;
  id?: string;
  text?: string;
  className?: string;
  onClick: (id?: string) => void;
};
