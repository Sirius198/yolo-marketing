import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import HiwHeroSectionComponent, { HiwHeroSectionProps } from '.';

export default {
  title: 'Marketing / Sections / HowItWorks',
  component: HiwHeroSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof HiwHeroSectionComponent>;

export const Hero = (props: HiwHeroSectionProps) => (
  <HiwHeroSectionComponent {...props} />
);
