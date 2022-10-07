import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MarketingHeaderComponent, { MarketingHeaderProps } from '.';

export default {
  title: 'Marketing / Components / Header',
  component: MarketingHeaderComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm" p="10">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MarketingHeaderComponent>;

export const MarketingHeader = (props: MarketingHeaderProps) => (
  <MarketingHeaderComponent {...props} />
);
