import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TemperatureComponent, {
  CircularProgressProps as TemperatureProps,
} from '../Temperature';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: TemperatureComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TemperatureComponent>;

export const Temperature = (props: TemperatureProps) => (
  <TemperatureComponent {...props} />
);
