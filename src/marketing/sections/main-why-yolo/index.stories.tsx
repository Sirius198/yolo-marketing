import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainWhyYoloSectionComponent, { MainWhyYoloSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: MainWhyYoloSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm" p="10">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainWhyYoloSectionComponent>;

export const WhyYoloHealth = (props: MainWhyYoloSectionProps) => (
  <MainWhyYoloSectionComponent {...props} />
);
