export interface BtnsSwitcherProps {
  handleBtnClk: (id: string) => void;
  buttonsList: {id: string; text: string}[];
  active: string;
  size?: "sm" | "md"
}
