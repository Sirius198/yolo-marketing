import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ComplexTableComponent, { ComplexTableProps } from '../ComplexTable';

export default {
  title:
    'Templates / Sections / main / applications / dataTables / components',
  component: ComplexTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ComplexTableComponent>;

export const ComplexTable = (props: ComplexTableProps) => (
  <ComplexTableComponent {...props} />
);
