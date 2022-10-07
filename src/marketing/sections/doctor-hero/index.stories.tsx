import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DoctorHeroSectionComponent, {
  DoctorHeroSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Program',
  component: DoctorHeroSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DoctorHeroSectionComponent>;

export const DoctorHero = (
  props: DoctorHeroSectionProps
) => <DoctorHeroSectionComponent {...props} />;
