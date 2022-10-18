import React, { useState } from 'react';
import { StorybookContainer } from '@components/StorybookContainer';
import { Toggle } from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <StorybookContainer>
      <Toggle onClick={handleChange} checked={checked} {...args} />
    </StorybookContainer>
  );
};

export const toggle = Template.bind({});
toggle.args = {
  id: 'StoryToggle',
  text: 'Click me',
  disabled: false,
};
