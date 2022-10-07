import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import StorageComponent, { StorageProps } from '../Storage';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: StorageComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof StorageComponent>;

export const Storage = (props: StorageProps) => (
  <StorageComponent {...props} />
);
