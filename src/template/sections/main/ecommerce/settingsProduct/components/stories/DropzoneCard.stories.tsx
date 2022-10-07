import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DropzoneCardComponent, { DropzoneCardProps } from '../DropzoneCard';

export default {
  title:
    'Templates / Sections / main / ecommerce / settingsProduct / components',
  component: DropzoneCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DropzoneCardComponent>;

export const DropzoneCard = (props: DropzoneCardProps) => (
  <DropzoneCardComponent {...props} />
);
