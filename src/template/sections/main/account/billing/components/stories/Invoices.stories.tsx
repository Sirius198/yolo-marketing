import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InvoicesComponent, { InvoicesProps } from '../Invoices';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: InvoicesComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InvoicesComponent>;

export const Invoices = (props: InvoicesProps) => (
  <InvoicesComponent {...props} />
);
