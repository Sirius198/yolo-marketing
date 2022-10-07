import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ConnectedComponent, { ConnectedProps } from '../Connected';

export default {
  title: 'Templates / Sections / main / account / settings / components',
  component: ConnectedComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ConnectedComponent>;

export const Connected = (props: ConnectedProps) => (
  <ConnectedComponent {...props} />
);
