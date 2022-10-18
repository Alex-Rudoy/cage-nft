export type TextAreaProps = {
  value: string;
  id: string;
  label?: string;
  placeholder?: string;
  floatingLabel?: string;
  rows?: number;
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
};
