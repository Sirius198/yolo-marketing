import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import UploadComponent, { UploadProps } from '../Upload';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: UploadComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof UploadComponent>;

export const Upload = (props: UploadProps) => (
  <UploadComponent {...props} />
);
