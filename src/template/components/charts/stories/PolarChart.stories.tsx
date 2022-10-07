import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PolarChartComponent, { PolarChartProps } from '../PolarChart';

export default {
  title: 'Templates / Components / Charts',
  component: PolarChartComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PolarChartComponent>;

export const PolarChart = (props: PolarChartProps) => (
  <PolarChartComponent {...props} />
);
