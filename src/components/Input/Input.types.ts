export type InputProps = {
  value: string | number | null;
  id: string;
  label?: string;
  autoComplete?: string;
  placeholder?: string;
  floatingLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
  type?: 'password' | 'text' | 'select';
  disabled?: boolean;
  leftBlock?: React.ReactNode;
  rightBlock?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
};
