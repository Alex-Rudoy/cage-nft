import React, { useState } from 'react';

import { StorybookContainer } from '@components/StorybookContainer';
import { InputPassword } from '.';

export default {
  title: 'Components/Input Password',
  component: InputPassword,
  argTypes: {
    id: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  return (
    <StorybookContainer>
      <InputPassword
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...args}
      />
    </StorybookContainer>
  );
};

export const inputPassword = Template.bind({});
inputPassword.args = {
  id: 'storyInput',
  disabled: false,
  errorMessage: '',
  placeholder: 'Enter password',
  label: 'Password',
};
