import React, { useState } from 'react';
import { StorybookContainer } from '@components/StorybookContainer';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { Input } from '.';
import { InputProps } from './Input.types';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    id: {
      table: { disable: true },
    },
    leftBlock: {
      table: { disable: true },
    },
    rightBlock: {
      table: { disable: true },
    },
  },
};

const Template = ({
  showLeftBlock,
  showRightBlock,
  ...args
}: InputProps & { showLeftBlock: boolean; showRightBlock: boolean }) => {
  const [value, setValue] = useState('');

  return (
    <StorybookContainer>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        leftBlock={showLeftBlock ? <ExampleBlock /> : null}
        rightBlock={showRightBlock ? <ExampleBlock /> : null}
        {...args}
      />
    </StorybookContainer>
  );
};

const ExampleBlock: React.FC = () => (
  <div
    style={{
      height: '40px',
      width: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--gray-300)',
    }}
  >
    <SvgIcon src={IconsEnum.search} size={20} color="gray-500" />
  </div>
);

export const input = Template.bind({});
input.args = {
  id: 'storyInput',
  disabled: false,
  errorMessage: '',
  placeholder: 'Input takes 100% width. Left and right blocks are examples',
  showLeftBlock: false,
  showRightBlock: false,
  label: 'Label',
};
