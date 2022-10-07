import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import EagleViewComponent, {
  AddDeviceProps as EagleViewProps,
} from '../EagleView';

export default {
  title: 'Templates / Sections / carInterface / components',
  component: EagleViewComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof EagleViewComponent>;

export const EagleView = (props: EagleViewProps) => (
  <EagleViewComponent {...props} />
);
