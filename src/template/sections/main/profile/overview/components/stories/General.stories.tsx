import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import GeneralComponent, { GeneralProps } from '../General';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: GeneralComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof GeneralComponent>;

export const General = (props: GeneralProps) => (
  <GeneralComponent {...props} />
);
