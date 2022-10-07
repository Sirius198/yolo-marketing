import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import LineAreaChartComponent, {
  LineAreaChartProps,
} from '../LineAreaChart';

export default {
  title: 'Templates / Components / Charts',
  component: LineAreaChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LineAreaChartComponent>;

export const LineAreaChart = (props: LineAreaChartProps) => (
  <LineAreaChartComponent {...props} />
);
