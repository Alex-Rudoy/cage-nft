export interface ButtonConfigItem {
  id: number;
  title: string;
}

export interface BtnsSwitcherProps {
  buttonConfigList: ButtonConfigItem[];
  currentButtonId: number | null;
  setCurrentButtonId: (id: number) => void;
  size?: 'exsm' | 'sm' | 'md';
}
