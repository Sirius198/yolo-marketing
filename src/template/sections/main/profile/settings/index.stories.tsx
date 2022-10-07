import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DefaultComponent, { DefaultProps } from './';

export default {
  title: 'Templates / Sections / main / profile / settings',
  component: DefaultComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DefaultComponent>;

export const Default = (props: DefaultProps) => (
  <DefaultComponent {...props} />
);
