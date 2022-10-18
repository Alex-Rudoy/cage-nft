export type RadioProps = {
  className?: string;
  value: string;
  checked: boolean;
  text?: string;
  disabled?: boolean;
  description?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
