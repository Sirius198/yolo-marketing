import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TableTopCreatorsComponent, {
  TopCreatorTableProps as TableTopCreatorsProps,
} from '../TableTopCreators';

export default {
  title: 'Templates / Sections / nfts / marketplace / components',
  component: TableTopCreatorsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TableTopCreatorsComponent>;

export const TableTopCreators = (props: TableTopCreatorsProps) => (
  <TableTopCreatorsComponent {...props} />
);
