import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InformationComponent, { InformationProps } from '../Information';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: InformationComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InformationComponent>;

export const Information = (props: InformationProps) => (
  <InformationComponent {...props} />
);
