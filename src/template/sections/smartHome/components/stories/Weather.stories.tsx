import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import WeatherComponent, {
  CircularProgressProps as WeatherProps,
} from '../Weather';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: WeatherComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof WeatherComponent>;

export const Weather = (props: WeatherProps) => (
  <WeatherComponent {...props} />
);
