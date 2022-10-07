import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SearchTableOrdersComponent, {
  SearchTableOrdersProps,
} from '../SearchTableOrders';

export default {
  title:
    'Templates / Sections / main / ecommerce / orderList / components',
  component: SearchTableOrdersComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SearchTableOrdersComponent>;

export const SearchTableOrders = (props: SearchTableOrdersProps) => (
  <SearchTableOrdersComponent {...props} />
);
