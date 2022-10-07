import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BannerComponent, { BannerProps } from '../Banner';

export default {
  title: 'Templates / Sections / nfts / profile / components',
  component: BannerComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BannerComponent>;

export const Banner = (props: BannerProps) => (
  <BannerComponent {...props} />
);
