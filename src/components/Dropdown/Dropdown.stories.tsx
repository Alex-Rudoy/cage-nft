import React, { useState } from 'react';
import { Dropdown } from '.';
import { fakeDataForStory } from './fakeDataForStory';
import { StorybookContainer } from '@components/StorybookContainer';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
    setValue: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    textVariant: {
      table: { disable: true },
    },
    iconOnly: {
      table: { disable: true },
    },
    fontWeight: {
      table: { disable: true },
    },
    containerClass: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(null);

  return (
    <StorybookContainer>
      <Dropdown
        options={fakeDataForStory}
        value={value}
        setValue={(value) => setValue(value.toString())}
        placeholder="Select an option"
        {...args}
      />
    </StorybookContainer>
  );
};

export const dropdown = Template.bind({});
dropdown.args = {
  placeholder: 'Select an option',
  width: 320,
};
