import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainServiceSectionComponent, { MainServiceSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: MainServiceSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainServiceSectionComponent>;

export const OurServices = (props: MainServiceSectionProps) => (
  <MainServiceSectionComponent {...props} />
);
