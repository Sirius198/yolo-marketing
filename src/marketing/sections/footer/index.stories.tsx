import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import FooterSectionComponent, { FooterSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Common',
  component: FooterSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof FooterSectionComponent>;

export const Footer = (props: FooterSectionProps) => (
  <FooterSectionComponent {...props} />
);
