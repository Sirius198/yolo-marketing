import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ColumnsTableComponent, { ColumnsTableProps } from '../ColumnsTable';

export default {
  title:
    'Templates / Sections / main / applications / dataTables / components',
  component: ColumnsTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ColumnsTableComponent>;

export const ColumnsTable = (props: ColumnsTableProps) => (
  <ColumnsTableComponent {...props} />
);
