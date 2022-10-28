import { colorType } from '@typings/color';

export enum IconsEnum {
  // account
  shield = '/icons/account/shield.svg',
  guide = '/icons/account/guide.svg',
  email = '/icons/account/email.svg',
  sms = '/icons/account/sms.svg',
  
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
  filePlus = '/icons/common/file-plus.svg',
  alertTriangle = '/icons/common/alert-triangle.svg',
  pie = '/icons/common/pie.svg',
  clock = '/icons/common/clock.svg',
  envelope = '/icons/common/envelope.svg',
  bell = '/icons/common/bell.svg',
  data = '/icons/common/data.svg',
  alert = '/icons/common/alert.svg',
  mobile = '/icons/common/mobile.svg',
  tag = '/icons/common/tag.svg',
  adminPanel = '/icons/common/admin-panel.svg',
  publish = '/icons/common/publish.svg',
  editPencil = '/icons/common/edit-pencil.svg',
  moreHorizontal = '/icons/common/more-horizontal.svg',
  dollar = '/icons/common/dollar.svg',
  lock = '/icons/common/lock.svg',
  award = '/icons/common/award.svg',
  upload = '/icons/common/upload-cloud.svg',
  font = '/icons/common/font.svg',
  lineChartUp = '/icons/common/line-chart-up.svg',
  switchHorizontal = '/icons/common/switch-horizontal.svg',
  announcement = '/icons/common/announcement.svg',
  lifeBuoy = '/icons/common/life-buoy.svg',
  config = '/icons/common/config.svg',
  checkCircleBlue = '/icons/common/checkCircleBlue.svg',
  monitor = '/icons/common/monitor.svg',
  phone = '/icons/common/phone.svg',
  userPlus = '/icons/common/user-plus.svg',

  //theme
  moon = '/icons/theme/moon.svg',
  sun = '/icons/theme/sun.svg',
  sunwhite = '/icons/theme/sunwhite.svg',
  // campaigns
  draft = '/icons/campaigns/draft.svg',
  scheduled = '/icons/campaigns/Scheduled.svg',
  sending = '/icons/campaigns/Sending.svg',
  complete = '/icons/campaigns/Sent.svg',
  sent = '/icons/campaigns/Sent.svg',
  archived = '/icons/campaigns/Archived.svg',
  mail = '/icons/campaigns/mail.svg',
  message = '/icons/campaigns/message.svg',
  refresh = '/icons/common/refresh-cw.svg',
  glob = '/icons/common/globe.svg',
  info = '/icons/common/info.svg',

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
  about= '/icons/menu/about.svg',
  Twitter = '/icons/menu/twitter.svg',
  Telegram = '/icons/menu/telegram.svg',
  Discord = '/icons/menu/discord.svg',
  Youtube = '/icons/menu/youtube.svg',
  // ava = '/icons/menu/ava.svg',
  gettingStarted = '/icons/menu/getting-started.svg',
  videoTutorials = '/icons/menu/video-tutorials.svg',
  reportBug = '/icons/menu/report-bug.svg',
  requestFeature = '/icons/menu/request-feature.svg',
  changeLog = '/icons/menu/change-log.svg',
  documentation = '/icons/menu/documentation.svg',
  chatSupport = '/icons/menu/chat-support.svg',

  apiKey = '/icons/menu/api-key.svg',
  notificationSettings = '/icons/menu/notification-settings.svg',
  roles = '/icons/menu/roles.svg',
  messagingSetup = '/icons/menu/messaging-setup.svg',
  dataDictionary = '/icons/menu/data-dictionary.svg',

  account = '/icons/menu/account.svg',
  billing = '/icons/menu/billing.svg',
  logout = '/icons/menu/log-out.svg',

  // integrations
  google = '/icons/integrations/google.svg',

  // segments
  event = '/icons/segments/event.svg',
  attribute = '/icons/segments/attribute.svg',
  segment = '/icons/segments/segment.svg',
  shopifyGrayscale = '/icons/segments/shopify-grayscale.svg',
  occurs = '/icons/segments/occurs.svg',
  firstOccurred = '/icons/segments/first-occured.svg',
  lastOccurred = '/icons/segments/last-occured.svg',
  shopify = '/icons/common/shopify.svg',
  calendar = '/icons/segments/calendar.svg',

  // change password
  key = '/icons/changePassword/key.svg',
  // TODO: Eugen Krivenko - delete after icon will come from backend
  javascript = '/icons/javascript.svg',

  //flags
  indonesia = '/icons/flags/Indonesia.svg',

  // flows
  rocket = '/icons/flows/rocket.svg',
  lightning = '/icons/flows/lightning.svg',
  chevrons = '/icons/flows/chevrons-right.svg',
  addTag = '/icons/flows/add-tag.svg',
  removeTag = '/icons/flows/remove-tag.svg',
  forms = '/icons/flows/forms.svg',
  messageSquare = '/icons/flows/message-square.svg',
  mailSquare = '/icons/flows/mail-square.svg',
  server = '/icons/flows/server.svg',
  smartphone = '/icons/flows/smartphone.svg',
  addSegment = '/icons/flows/add-segment.svg',
  removeSegment = '/icons/flows/remove-segment.svg',
  facebookAdd = '/icons/flows/facebook-add.svg',
  facebookRemove = '/icons/flows/facebook-remove.svg',
  splitPath = '/icons/flows/split-path.svg',
  trueFalse = '/icons/flows/true-false.svg',
  percentageSplit = '/icons/flows/random-percentage-split.svg',
  waitCondition = '/icons/flows/wait-condition.svg',
  waitDuration = '/icons/flows/wait-duration.svg',
  waitTimeWindow = '/icons/flows/wait-time-window.svg',
  sendToFlow = '/icons/flows/send-to-flow.svg',
  exitSegment = '/icons/flows/exit-segment.svg',

  // Networks
  // twitter = '/icons/networks/twitter.svg',
  facebook = '/icons/networks/facebook.svg',
  instagram = '/icons/networks/instagram.svg',
  linkedin = '/icons/networks/linkedin.svg',
  tiktok = '/icons/networks/tiktok.svg',
  // youtube = '/icons/networks/youtube.svg',
  twitterOutline = '/icons/networks/twitter_outline.svg',
  facebookOutline = '/icons/networks/facebook_outline.svg',
  instagramOutline = '/icons/networks/instagram_outline.svg',
  linkedinOutline = '/icons/networks/linkedin_outline.svg',
  tiktokOutline = '/icons/networks/tiktok_outline.svg',
  youtubeOutline = '/icons/networks/youtube_outline.svg',
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
