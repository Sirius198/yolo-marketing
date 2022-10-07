import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TimelineComponent, { TimelineProps } from '../Timeline';

export default {
  title:
    'Templates / Sections / main / applications / calendar / components',
  component: TimelineComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TimelineComponent>;

export const Timeline = (props: TimelineProps) => (
  <TimelineComponent {...props} />
);
