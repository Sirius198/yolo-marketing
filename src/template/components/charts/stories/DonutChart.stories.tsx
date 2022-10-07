import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DonutChartComponent, { DonutChartProps } from '../DonutChart';

export default {
  title: 'Templates / Components / Charts',
  component: DonutChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DonutChartComponent>;

export const DonutChart = (props: DonutChartProps) => (
  <DonutChartComponent {...props} />
);
