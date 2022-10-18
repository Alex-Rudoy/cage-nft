import React from 'react';
import { Avatar } from '.';
import { StorybookContainer } from '@components/StorybookContainer';

import { AvatarProps } from './Avatar.types';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

const Template = ({ avatar, ...rest }: AvatarProps & { avatar: boolean }) => {
  return (
    <StorybookContainer>
      <Avatar src={avatar ? '/images/avatarPlaceholder.jpg' : ''} {...rest} />
    </StorybookContainer>
  );
};

export const avatar = Template.bind({});
avatar.args = {
  name: 'Olivia',
  lastName: 'Rhye',
  avatar: true,
};
