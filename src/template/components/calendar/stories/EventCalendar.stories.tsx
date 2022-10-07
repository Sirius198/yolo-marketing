import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import EventCalendarComponent, {
  EventCalendarProps,
} from '../EventCalendar';

export default {
  title: 'Templates / Components / Calendar',
  component: EventCalendarComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6" height="100vh" width="100%">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof EventCalendarComponent>;

export const EventCalendar = (props: EventCalendarProps) => (
  <EventCalendarComponent {...props} />
);
