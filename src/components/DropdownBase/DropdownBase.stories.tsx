import React, { useState } from 'react';
import { DropdownBase } from '.';
import { StorybookContainer } from '@components/StorybookContainer';
import { DropdownItem } from '@components/DropdownItem';
import { IconsEnum } from '@components/SvgIcon';
import { DropdownSearch } from '@components/DropdownSearch';
import { DropdownDivider } from '@components/DropdownDivider';
import { DropdownCaller } from '@components/DropdownCaller';

import { fakeDataForStory } from './fakeDataForStory';

export default {
  title: 'Components/Dropdown Constructor',
  component: DropdownBase,
  argTypes: {
    maxHeight: {
      type: { required: false },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState({
    icon: IconsEnum.search,
    text: 'All events',
  });
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setIsOpen(false);
    setValue(value);
  };

  return (
    <StorybookContainer>
      <DropdownBase
        caller={<DropdownCaller {...value} />}
        customState={[isOpen, setIsOpen]}
        {...args}
      >
        <DropdownSearch
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <DropdownItem
          text="All events"
          icon={IconsEnum.search}
          onClick={() =>
            handleSelect({ icon: IconsEnum.search, text: 'All events' })
          }
        />

        <DropdownDivider />

        {fakeDataForStory
          .filter((item) =>
            item.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <DropdownItem
              key={item.text}
              text={item.text}
              icon={item.icon}
              onClick={() => handleSelect({ icon: item.icon, text: item.text })}
            />
          ))}
      </DropdownBase>
    </StorybookContainer>
  );
};

export const dropdownConstructor = Template.bind({});
dropdownConstructor.args = {
  maxHeight: 250,
  width: 320,
};
