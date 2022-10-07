import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TableLastOfferComponent, {
  TopCreatorTableProps as TableLastOfferProps,
} from '../TableLastOffer';

export default {
  title: 'Templates / Sections / nfts / page / components',
  component: TableLastOfferComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TableLastOfferComponent>;

export const TableLastOffer = (props: TableLastOfferProps) => (
  <TableLastOfferComponent {...props} />
);
