import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import FilterComponent, { FilterProps } from '../Filter';

export default {
  title: 'Templates / Sections / main / profile / newsfeed / components',
  component: FilterComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof FilterComponent>;

export const Filter = (props: FilterProps) => (
  <FilterComponent {...props} />
);
