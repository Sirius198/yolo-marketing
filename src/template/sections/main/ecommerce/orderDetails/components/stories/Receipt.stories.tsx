import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ReceiptComponent, { ReceiptProps } from '../Receipt';

export default {
  title:
    'Templates / Sections / main / ecommerce / orderDetails / components',
  component: ReceiptComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ReceiptComponent>;

export const Receipt = (props: ReceiptProps) => (
  <ReceiptComponent {...props} />
);
