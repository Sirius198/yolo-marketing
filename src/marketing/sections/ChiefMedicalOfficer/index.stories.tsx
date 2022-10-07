import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChiefMedicalOfficerSectionComponent, {
  ChiefMedicalOfficerSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Common',
  component: ChiefMedicalOfficerSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChiefMedicalOfficerSectionComponent>;

export const ChiefMedicalOfficer = (
  props: ChiefMedicalOfficerSectionProps
) => <ChiefMedicalOfficerSectionComponent {...props} />;
