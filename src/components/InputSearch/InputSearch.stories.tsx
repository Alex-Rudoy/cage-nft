import React, { useState } from 'react';

import { StorybookContainer } from '@components/StorybookContainer';
import { InputSearch } from '.';

export default {
  title: 'Components/Input Search',
  component: InputSearch,
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
      <InputSearch
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...args}
      />
    </StorybookContainer>
  );
};

export const inputSearch = Template.bind({});
inputSearch.args = {
  id: 'storyInput',
  disabled: false,
  errorMessage: '',
};
