import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import OverallRevenueComponent, {
  OverallRevenueProps,
} from '../OverallRevenue';

export default {
  title: 'Templates / Sections / default / components',
  component: OverallRevenueComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof OverallRevenueComponent>;

export const OverallRevenue = (props: OverallRevenueProps) => (
  <OverallRevenueComponent {...props} />
);
