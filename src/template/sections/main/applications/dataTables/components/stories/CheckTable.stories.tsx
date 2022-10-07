import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import CheckTableComponent, { CheckTableProps } from '../CheckTable';

export default {
  title:
    'Templates / Sections / main / applications / dataTables / components',
  component: CheckTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof CheckTableComponent>;

export const CheckTable = (props: CheckTableProps) => (
  <CheckTableComponent {...props} />
);
