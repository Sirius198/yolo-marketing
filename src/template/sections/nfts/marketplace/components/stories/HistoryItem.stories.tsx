import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import HistoryItemComponent, {
  NFTProps as HistoryItemProps,
} from '../HistoryItem';

export default {
  title: 'Templates / Sections / nfts / marketplace / components',
  component: HistoryItemComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof HistoryItemComponent>;

export const HistoryItem = (props: HistoryItemProps) => (
  <HistoryItemComponent {...props} />
);
