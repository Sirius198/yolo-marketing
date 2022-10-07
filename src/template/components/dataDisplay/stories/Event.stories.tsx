import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import EventComponent, { EventProps } from '../Event';

export default {
  title: 'Templates / Components / dataDisplay',
  component: EventComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof EventComponent>;

export const Event = (props: EventProps) => <EventComponent {...props} />;
