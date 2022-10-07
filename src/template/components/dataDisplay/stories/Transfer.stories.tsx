import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TransferComponent, { TransferProps } from '../Transfer';

export default {
  title: 'Templates / Components / dataDisplay',
  component: TransferComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TransferComponent>;

export const Transfer = (props: TransferProps) => (
  <TransferComponent {...props} />
);
