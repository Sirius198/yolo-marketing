import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import GeneralComponent, {
  CircularProgressProps as GeneralProps,
} from '../General';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: GeneralComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof GeneralComponent>;

export const General = (props: GeneralProps) => (
  <GeneralComponent {...props} />
);
