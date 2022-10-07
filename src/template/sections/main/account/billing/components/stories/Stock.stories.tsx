import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import StockComponent, { StockProps } from '../Stock';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: StockComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof StockComponent>;

export const Stock = (props: StockProps) => <StockComponent {...props} />;
