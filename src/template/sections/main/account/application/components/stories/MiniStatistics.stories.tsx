import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MiniStatisticsComponent, {
  MiniStatisticsProps,
} from '../MiniStatistics';

export default {
  title:
    'Templates / Sections / main / account / application / components',
  component: MiniStatisticsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MiniStatisticsComponent>;

export const MiniStatistics = (props: MiniStatisticsProps) => (
  <MiniStatisticsComponent {...props} />
);
