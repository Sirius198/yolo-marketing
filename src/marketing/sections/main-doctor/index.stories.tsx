import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainDoctorSectionComponent, { MainDoctorSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: MainDoctorSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm" p="10">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainDoctorSectionComponent>;

export const Doctor = (props: MainDoctorSectionProps) => (
  <MainDoctorSectionComponent {...props} />
);
