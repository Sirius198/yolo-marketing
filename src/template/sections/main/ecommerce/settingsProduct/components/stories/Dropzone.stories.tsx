import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DropzoneComponent, { DropzoneProps } from '../Dropzone';

export default {
  title:
    'Templates / Sections / main / ecommerce / settingsProduct / components',
  component: DropzoneComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DropzoneComponent>;

export const Dropzone = (props: DropzoneProps) => (
  <DropzoneComponent {...props} />
);
