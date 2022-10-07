import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AddDeviceComponent, { AddDeviceProps } from '../AddDevice';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: AddDeviceComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AddDeviceComponent>;

export const AddDevice = (props: AddDeviceProps) => (
  <AddDeviceComponent {...props} />
);
