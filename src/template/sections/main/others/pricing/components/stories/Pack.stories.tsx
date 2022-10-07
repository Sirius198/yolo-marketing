import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PackComponent, { PackProps } from '../Pack';

export default {
  title: 'Templates / Sections / main / others / pricing / components',
  component: PackComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PackComponent>;

export const Pack = (props: PackProps) => <PackComponent {...props} />;
