import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BrandSectionComponent, { BrandSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: BrandSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm" p="10">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BrandSectionComponent>;

export const Brand = (props: BrandSectionProps) => (
  <BrandSectionComponent {...props} />
);
