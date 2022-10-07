import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ManagementTableComponent, {
  ManagementTableProps,
} from '../ManagementTable';

export default {
  title:
    'Templates / Sections / main / account / application / components',
  component: ManagementTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ManagementTableComponent>;

export const ManagementTable = (props: ManagementTableProps) => (
  <ManagementTableComponent {...props} />
);
