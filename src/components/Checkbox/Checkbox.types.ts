export type CheckboxProps = {
  className?: string;
  checked: boolean;
  id: string;
  text?: string;
  disabled?: boolean;
  onClick: (id?: string) => void;
};
