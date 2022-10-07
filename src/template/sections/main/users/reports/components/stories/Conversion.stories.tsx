import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ConversionComponent, { ConversionProps } from '../Conversion';

export default {
  title: 'Templates / Sections / main / users / reports / components',
  component: ConversionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ConversionComponent>;

export const Conversion = (props: ConversionProps) => (
  <ConversionComponent {...props} />
);
