import { simpleOptionWithStringValue } from '@typings/dictionary';

export type TabBarProps = {
  id?: string;
  className?: string;
  selectedTab: string;
  options: simpleOptionWithStringValue[];
  onTabClick: (tab: string) => void;
  labelsTranslateNS?: string;
};
