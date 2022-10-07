import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TakeFirstStepSectionComponent, {
  TakeFirstStepSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Common',
  component: TakeFirstStepSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm" p="10">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TakeFirstStepSectionComponent>;

export const TakeFirstStep = (props: TakeFirstStepSectionProps) => (
  <TakeFirstStepSectionComponent {...props} />
);
