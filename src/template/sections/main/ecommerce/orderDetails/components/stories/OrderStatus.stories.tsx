import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import OrderStatusComponent, { OrderStatusProps } from '../OrderStatus';

export default {
  title:
    'Templates / Sections / main / ecommerce / orderDetails / components',
  component: OrderStatusComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof OrderStatusComponent>;

export const OrderStatus = (props: OrderStatusProps) => (
  <OrderStatusComponent {...props} />
);
