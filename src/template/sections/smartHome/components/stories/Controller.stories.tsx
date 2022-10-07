import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ControllerComponent, {
  CircularProgressProps as ControllerProps,
} from '../Controller';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: ControllerComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ControllerComponent>;

export const Controller = (props: ControllerProps) => (
  <ControllerComponent {...props} />
);
