import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AuctionComponent, { AuctionProps } from '../Auction';

export default {
  title: 'Templates / Sections / nfts / page / components',
  component: AuctionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AuctionComponent>;

export const Auction = (props: AuctionProps) => (
  <AuctionComponent {...props} />
);
