import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InvoiceTableComponent, { InvoiceTableProps } from '../InvoiceTable';

export default {
  title: 'Templates / Sections / main / account / invoice / components',
  component: InvoiceTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InvoiceTableComponent>;

export const InvoiceTable = (props: InvoiceTableProps) => (
  <InvoiceTableComponent {...props} />
);
