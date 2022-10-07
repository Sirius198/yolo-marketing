import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MiniStatistics, { MiniStatisticsProps } from '../MiniStatistics';

export default {
  title: 'Templates / Components / Card',
  component: MiniStatistics,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MiniStatistics>;

export const MiniStatisticsCard = (props: MiniStatisticsProps) => (
  <MiniStatistics {...props} />
);
