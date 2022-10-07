import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ReceiptTableComponent, { ReceiptTableProps } from '../ReceiptTable';

export default {
  title:
    'Templates / Sections / main / ecommerce / orderDetails / components',
  component: ReceiptTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ReceiptTableComponent>;

export const ReceiptTable = (props: ReceiptTableProps) => (
  <ReceiptTableComponent {...props} />
);
