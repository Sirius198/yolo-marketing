import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MarketComponent, { MarketProps } from '../Market';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: MarketComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MarketComponent>;

export const Market = (props: MarketProps) => (
  <MarketComponent {...props} />
);
