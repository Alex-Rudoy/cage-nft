export type InputSearchProps = {
  value: string;
  id: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  containerClass?: string;
  errorMessage?: string;
  disabled?: boolean;
  onKeyPress?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};
