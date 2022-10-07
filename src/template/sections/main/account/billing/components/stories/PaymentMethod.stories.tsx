import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PaymentMethodComponent, {
  PaymentMethodProps,
} from '../PaymentMethod';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: PaymentMethodComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PaymentMethodComponent>;

export const PaymentMethod = (props: PaymentMethodProps) => (
  <PaymentMethodComponent {...props} />
);
