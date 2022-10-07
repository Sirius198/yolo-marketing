import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TrendingComponent, { TrendingProps } from '../Trending';

export default {
  title: 'Templates / Sections / main / profile / newsfeed / components',
  component: TrendingComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TrendingComponent>;

export const Trending = (props: TrendingProps) => (
  <TrendingComponent {...props} />
);
