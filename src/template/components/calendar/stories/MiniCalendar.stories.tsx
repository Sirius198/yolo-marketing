import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MiniCalendarComponent, { MiniCalendarProps } from '../MiniCalendar';

export default {
  title: 'Templates / Components / Calendar',
  component: MiniCalendarComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MiniCalendarComponent>;

export const MiniCalendar = (props: MiniCalendarProps) => (
  <MiniCalendarComponent {...props} />
);
