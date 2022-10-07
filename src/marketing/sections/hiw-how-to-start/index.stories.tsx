import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import HiwHowToStartSectionComponent, {
  HiwHowToStartSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / HowItWorks',
  component: HiwHowToStartSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof HiwHowToStartSectionComponent>;

export const HowToStart = (props: HiwHowToStartSectionProps) => (
  <HiwHowToStartSectionComponent {...props} />
);
