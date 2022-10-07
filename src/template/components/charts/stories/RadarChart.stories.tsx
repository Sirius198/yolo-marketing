import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import RadarChartComponent, { RadarChartProps } from '../RadarChart';

export default {
  title: 'Templates / Components / Charts',
  component: RadarChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof RadarChartComponent>;

export const RadarChart = (props: RadarChartProps) => (
  <RadarChartComponent {...props} />
);
