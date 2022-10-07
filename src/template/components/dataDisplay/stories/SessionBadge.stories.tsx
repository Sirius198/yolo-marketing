import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SessionBadgeComponent, { SessionBadgeProps } from '../SessionBadge';

export default {
  title: 'Templates / Components / dataDisplay',
  component: SessionBadgeComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SessionBadgeComponent>;

export const SessionBadge = (props: SessionBadgeProps) => (
  <SessionBadgeComponent {...props} />
);
