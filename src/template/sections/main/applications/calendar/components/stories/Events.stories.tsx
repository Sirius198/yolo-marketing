import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import EventsComponent, { EventsProps } from '../Events';

export default {
  title:
    'Templates / Sections / main / applications / calendar / components',
  component: EventsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof EventsComponent>;

export const Events = (props: EventsProps) => (
  <EventsComponent {...props} />
);
