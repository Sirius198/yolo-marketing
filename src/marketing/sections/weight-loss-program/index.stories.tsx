import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import WeightLossProgramSectionComponent, {
  WeightLossProgramSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Program',
  component: WeightLossProgramSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof WeightLossProgramSectionComponent>;

export const WeightLossProgram = (
  props: WeightLossProgramSectionProps
) => <WeightLossProgramSectionComponent {...props} />;
