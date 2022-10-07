import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DefaultComponent, { DefaultProps } from './';

export default {
  title: 'Templates / Sections / default',
  component: DefaultComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DefaultComponent>;

export const Default = (props: DefaultProps) => (
  <DefaultComponent {...props} />
);
