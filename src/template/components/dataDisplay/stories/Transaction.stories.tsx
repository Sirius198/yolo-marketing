import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TransactionComponent, { TransactionProps } from '../Transaction';

export default {
  title: 'Templates / Components / dataDisplay',
  component: TransactionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TransactionComponent>;

export const Transaction = (props: TransactionProps) => (
  <TransactionComponent {...props} />
);
