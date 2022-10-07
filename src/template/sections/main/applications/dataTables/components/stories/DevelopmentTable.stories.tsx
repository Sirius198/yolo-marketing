import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DevelopmentTableComponent, {
  DevelopmentTableProps,
} from '../DevelopmentTable';

export default {
  title:
    'Templates / Sections / main / applications / dataTables / components',
  component: DevelopmentTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DevelopmentTableComponent>;

export const DevelopmentTable = (props: DevelopmentTableProps) => (
  <DevelopmentTableComponent {...props} />
);
