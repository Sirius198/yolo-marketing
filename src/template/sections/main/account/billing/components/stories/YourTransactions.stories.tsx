import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import YourTransactionsComponent, {
  YourTransactionsProps,
} from '../YourTransactions';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: YourTransactionsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof YourTransactionsComponent>;

export const YourTransactions = (props: YourTransactionsProps) => (
  <YourTransactionsComponent {...props} />
);
