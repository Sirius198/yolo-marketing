import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainHeroSectionComponent, { MainHeroSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: MainHeroSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainHeroSectionComponent>;

export const Hero = (props: MainHeroSectionProps) => (
  <MainHeroSectionComponent {...props} />
);
