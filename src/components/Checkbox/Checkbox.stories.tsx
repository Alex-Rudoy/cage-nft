import React, { useState } from 'react';
import { StorybookContainer } from '@components/StorybookContainer';
import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    id: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StorybookContainer>
      <Checkbox onClick={handleChange} checked={checked} {...args} />
    </StorybookContainer>
  );
};

export const checkbox = Template.bind({});
checkbox.args = {
  id: 'StoryCheckbox',
  text: 'Click me',
  disabled: false,
};
