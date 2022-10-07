import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BarChartComponent, { BarChartProps } from '../BarChart';

export default {
  title: 'Templates / Components / Charts',
  component: BarChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BarChartComponent>;

export const BarChart = (props: BarChartProps) => (
  <BarChartComponent {...props} />
);
