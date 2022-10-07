import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ScheduleComponent, { ScheduleProps } from '../Schedule';

export default {
  title: 'Templates / Sections / main / account / courses / components',
  component: ScheduleComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ScheduleComponent>;

export const Schedule = (props: ScheduleProps) => (
  <ScheduleComponent {...props} />
);
