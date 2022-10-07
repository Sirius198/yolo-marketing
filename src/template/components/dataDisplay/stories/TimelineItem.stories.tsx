import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TimelineItemComponent, { TimelineItemProps } from '../TimelineItem';

export default {
  title: 'Templates / Components / dataDisplay',
  component: TimelineItemComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TimelineItemComponent>;

export const TimelineItem = (props: TimelineItemProps) => (
  <TimelineItemComponent {...props} />
);
