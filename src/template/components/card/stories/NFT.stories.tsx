import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NFT, { NFTProps } from '../NFT';

export default {
  title: 'Templates / Components / Card',
  component: NFT,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NFT>;

export const NFTCard = (props: NFTProps) => <NFT {...props} />;
