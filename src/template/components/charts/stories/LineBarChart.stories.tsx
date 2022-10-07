import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import LineBarChartComponent, { LineBarChartProps } from '../LineBarChart';

export default {
  title: 'Templates / Components / Charts',
  component: LineBarChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LineBarChartComponent>;

export const LineBarChart = (props: LineBarChartProps) => (
  <LineBarChartComponent {...props} />
);
