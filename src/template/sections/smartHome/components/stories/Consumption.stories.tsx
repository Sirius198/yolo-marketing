import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ConsumptionComponent, { ConsumptionProps } from '../Consumption';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: ConsumptionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ConsumptionComponent>;

export const Consumption = (props: ConsumptionProps) => (
  <ConsumptionComponent {...props} />
);
