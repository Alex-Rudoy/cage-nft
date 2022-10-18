import React, { useState } from 'react';
import { Text, TextVariantsEnum } from '@components/Text';
import { Button } from '.';
import { StorybookContainer } from '@components/StorybookContainer';
import { IconsEnum } from '@components/SvgIcon';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    width: {
      control: {
        type: 'select',
      },
      options: ['content', 'full'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'red'],
    },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
  },
};

const Template = ({
  showIcon,
  ...args
}: ButtonProps & { showIcon: boolean }) => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setCounter(counter + 1);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <StorybookContainer>
      <Text variant={TextVariantsEnum.Text_md}>Counter: {counter}</Text>
      <Button
        onClick={handleClick}
        loading={isLoading}
        icon={showIcon ? IconsEnum.search : null}
        {...args}
      />
    </StorybookContainer>
  );
};

export const button = Template.bind({});
button.args = {
  text: 'Click me',
  variant: 'primary',
  disabled: false,
  width: 'content',
  showIcon: true,
  iconPosition: 'left',
};
