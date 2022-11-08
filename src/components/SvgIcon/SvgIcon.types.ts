import { colorType } from '@typings/color';

export enum IconsEnum {
  //CARD
  heartt = '/icons/card/heart.svg',
  eyess = '/icons/card/eyess.svg',
  bubble = '/icons/card/bubble.svg',
  right = '/icons/card/right.svg',
  hearttt = '/images/card/heart.svg',
  bub = '/images/card/bub.svg',
  eyesm = '/images/card/eyesm.svg',

  //NFT PAGES
  reply = '/icons/nftPage/reply.svg',
  share = '/icons/nftPage/share.svg',
  reload = '/icons/nftPage/reload.svg',
  //head
  heart = '/icons/header/heart.svg',
  bell = '/icons/header/bell.svg',
  arrowupdown = '/icons/header/arrowupdown.svg',
  drop = 'icons/header/drop.svg',
  // common
  moda = '/icons/common/moda.svg',
  loader = '/icons/common/loader.svg',
  loop = '/icons/common/loop.svg',
  search = '/icons/common/search.svg',
  showPassword = '/icons/common/show-password.svg',
  hidePassowrd = '/icons/common/hide-password.svg',
  checkboxV = '/icons/common/checkbox-v.svg',
  arrow = '/icons/common/arrow.svg',
  arrowChevron = '/icons/common/arrow-chevron.svg',
  cross = '/icons/common/cross.svg',
  checkCircle = '/icons/common/check-circle.svg',
  plus = '/icons/common/plus.svg',
  plusInCircle = '/icons/common/plus-in-circle.svg',
  minus = '/icons/common/minus.svg',
  slash = '/icons/common/slash.svg',
  arrowUp = '/icons/common/arrow-up.svg',
  arrowDown = '/icons/common/arrow-down.svg',
  edit = '/icons/common/edit.svg',
  delete = '/icons/common/delete.svg',
  arrowRight = '/icons/common/arrow-right.svg',
  done = '/icons/common/done.svg',
  help = '/icons/common/help.svg',
  copy = '/icons/common/copy.svg',
  grid = '/icons/common/grid.svg',
  file = '/icons/common/file.svg',
  save = '/icons/common/save.svg',
  circleArrows = '/icons/common/circle-arrows.svg',
  users = '/icons/common/users.svg',
  filter = '/icons/common/filter.svg',
  play = '/icons/common/play.svg',
  check = '/icons/common/check.svg',
  data = '/icons/common/data.svg',

  tag = '/icons/common/tag.svg',
  font = '/icons/common/font.svg',
  lineChartUp = '/icons/common/line-chart-up.svg',
  config = '/icons/common/config.svg',
  checkCircleBlue = '/icons/common/checkCircleBlue.svg',
  monitor = '/icons/common/monitor.svg',
  phone = '/icons/common/phone.svg',
  userPlus = '/icons/common/user-plus.svg',

  //theme
  moon = '/icons/theme/moon.svg',
  sun = '/icons/theme/sun.svg',
  sunwhite = '/icons/theme/sunwhite.svg',

  // menu
  automate = '/icons/menu/automate.svg',
  dashboard = '/icons/menu/dashboard.svg',
  integrate = '/icons/menu/integrate.svg',
  manage = '/icons/menu/manage.svg',
  settings = '/icons/menu/settings.svg',
  arrdown = '/icons/menu/arr-down.svg',
  support = '/icons/common/help.svg',
  s = '/icons/menu/s.svg',
  sp = '/icons/menu/sp.svg',
  suport = '/icons/common/suport.svg',
  logo = '/icons/menu/logo.svg',
  logosm = '/icons/menu/logosm.svg',
  marketplace = '/icons/menu/market.svg',
  fract = '/icons/menu/fract.svg',
  launchpad = '/icons/menu/launchpad.svg',
  connect = '/icons/menu/connect.svg',
  supp = '/icons/menu/supp.svg',
  about = '/icons/menu/about.svg',
  Twitter = '/icons/menu/twitter.svg',
  Telegram = '/icons/menu/telegram.svg',
  Discord = '/icons/menu/discord.svg',
  Youtube = '/icons/menu/youtube.svg',
}

export type SvgIconProps = {
  src: IconsEnum | string; // use string for icons from backend
  onClick?: () => void;
  size?: number;
  height?: number;
  color?: colorType;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: React.CSSProperties;
  defaultStoke?: boolean;
  useCustomColor?: boolean;
  filledByCustomColor?: boolean;
};
