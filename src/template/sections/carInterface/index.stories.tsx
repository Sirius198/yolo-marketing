import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DefaultComponent, { DefaultProps } from './';

export default {
  title: 'Templates / Sections / carInterface',
  component: DefaultComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DefaultComponent>;

export const Default = (props: DefaultProps) => (
  <DefaultComponent {...props} />
);
