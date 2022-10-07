import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import FixedPluginComponent, { FixedPluginProps } from '../FixedPlugin';

export default {
  title: 'Templates / Components / fixedPlugin',
  component: FixedPluginComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof FixedPluginComponent>;

export const FixedPlugin = (props: FixedPluginProps) => (
  <FixedPluginComponent {...props} />
);
