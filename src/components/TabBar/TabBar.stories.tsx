import React, { useState } from 'react';
import { TabBar } from '.';
import { Text, TextVariantsEnum } from '@components/Text';

export default {
  title: 'Components/Tab Bar',
  component: TabBar,
};

const Template = (args) => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  return (
    <>
      <TabBar
        {...args}
        selectedTab={selectedTab}
        onTabClick={(tab) => setSelectedTab(tab)}
      />
      {(() => {
        switch (selectedTab) {
          case 'tab1':
            return (
              <Text variant={TextVariantsEnum.Text_md}>
                Some contents from tab 1
              </Text>
            );

          case 'tab2':
            return (
              <Text variant={TextVariantsEnum.Text_md}>
                Some another contents from tab 2
              </Text>
            );

          default:
            break;
        }
      })()}
    </>
  );
};

export const tabBar = Template.bind({});
tabBar.args = {
  options: [
    {
      value: 'tab1',
      label: 'Tab 1',
    },
    {
      value: 'tab2',
      label: 'Tab 2',
    },
  ],
};
