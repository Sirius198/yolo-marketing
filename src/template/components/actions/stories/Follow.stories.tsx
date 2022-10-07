import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Container } from '@chakra-ui/react';

import FollowComponent, { FollowProps } from '../Follow';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates / Components / Actions',
  component: FollowComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    username: { control: 'text' },
  },
  decorators: [
    (Story: any) => (
      <Container
        mt="40px"
        display="flex"
        flexWrap="wrap"
        gap="4"
        shadow="sm"
        p="12"
      >
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof FollowComponent>;

export const Follow: StoryFn<FollowProps> = (props) => (
  <FollowComponent {...props} />
);
Follow.args = {
  username: 'Nnenna',
  avatar: '/assets/images/avatars/avatar1.png',
  name: 'Cool name',
  action: () => {},
};
