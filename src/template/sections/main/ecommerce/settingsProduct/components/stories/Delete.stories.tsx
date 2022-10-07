import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DeleteComponent, { DeleteProps } from '../Delete';

export default {
  title:
    'Templates / Sections / main / ecommerce / settingsProduct / components',
  component: DeleteComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DeleteComponent>;

export const Delete = (props: DeleteProps) => (
  <DeleteComponent {...props} />
);
