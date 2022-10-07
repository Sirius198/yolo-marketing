import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import LineChartComponent, { LineChartProps } from '../LineChart';

export default {
  title: 'Templates / Components / Charts',
  component: LineChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LineChartComponent>;

export const LineChart = (props: LineChartProps) => (
  <LineChartComponent {...props} />
);
