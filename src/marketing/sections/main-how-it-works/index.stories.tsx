import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainHowItWorksSectionComponent, {
  MainHowItWorksSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: MainHowItWorksSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm" p="10">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainHowItWorksSectionComponent>;

export const HowItWorks = (props: MainHowItWorksSectionProps) => (
  <MainHowItWorksSectionComponent {...props} />
);
