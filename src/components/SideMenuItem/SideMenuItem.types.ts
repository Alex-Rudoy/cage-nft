export interface SideMenuItemProps {
  item: Element[];
  open: boolean;
}

type Element = {
  title: string;
  icon?: string;
  children?: Child[];
};

type Child = {
  path: string;
  title: string;
};
