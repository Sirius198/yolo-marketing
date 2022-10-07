import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BalanceComponent, { BalanceProps } from '../Balance';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: BalanceComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BalanceComponent>;

export const Balance = (props: BalanceProps) => (
  <BalanceComponent {...props} />
);
