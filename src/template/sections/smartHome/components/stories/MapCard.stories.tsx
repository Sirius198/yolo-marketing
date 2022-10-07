import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MapCardComponent, {
  YourTransfersProps as MapCardProps,
} from '../MapCard';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: MapCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MapCardComponent>;

export const MapCard = (props: MapCardProps) => (
  <MapCardComponent {...props} />
);
