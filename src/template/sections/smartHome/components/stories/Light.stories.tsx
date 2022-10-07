import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import LightComponent, {
  CircularProgressProps as LightProps,
} from '../Light';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: LightComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LightComponent>;

export const Light = (props: LightProps) => <LightComponent {...props} />;
