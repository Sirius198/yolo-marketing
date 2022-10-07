import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DetailsComponent, { DetailsProps } from '../Details';

export default {
  title:
    'Templates / Sections / main / ecommerce / settingsProduct / components',
  component: DetailsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DetailsComponent>;

export const Details = (props: DetailsProps) => (
  <DetailsComponent {...props} />
);
