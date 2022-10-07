import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PhoneComponent, { ConsumptionProps as PhoneProps } from '../Phone';

export default {
  title: 'Templates / Sections / carInterface / components',
  component: PhoneComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PhoneComponent>;

export const Phone = (props: PhoneProps) => <PhoneComponent {...props} />;
