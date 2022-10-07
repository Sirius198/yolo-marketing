import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BubbleChartComponent, { BubbleChartProps } from '../BubbleChart';

export default {
  title: 'Templates / Components / Charts',
  component: BubbleChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BubbleChartComponent>;

export const BubbleChart = (props: BubbleChartProps) => (
  <BubbleChartComponent {...props} />
);
