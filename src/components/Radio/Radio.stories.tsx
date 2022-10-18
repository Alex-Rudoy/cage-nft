import React, { useState } from 'react';
import { StorybookContainer } from '@components/StorybookContainer';
import { Radio } from '.';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template = ({ text1, text2, ...rest }) => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StorybookContainer>
      <Radio
        value="option1"
        checked={value === 'option1'}
        onChange={handleChange}
        text={text1}
        {...rest}
      />
      <Radio
        value="option2"
        checked={value === 'option2'}
        onChange={handleChange}
        text={text2}
        {...rest}
      />
    </StorybookContainer>
  );
};

export const radio = Template.bind({});
radio.args = {
  text1: 'Option 1',
  text2: 'Option 2',
  disabled: false,
};
