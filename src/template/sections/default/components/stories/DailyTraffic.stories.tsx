import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DailyTrafficComponent, { DailyTrafficProps } from '../DailyTraffic';

export default {
  title: 'Templates / Sections / default / components',
  component: DailyTrafficComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DailyTrafficComponent>;

export const DailyTraffic = (props: DailyTrafficProps) => (
  <DailyTrafficComponent {...props} />
);
