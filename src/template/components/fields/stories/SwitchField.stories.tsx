import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SwitchFieldComponent, { SwitchFieldProps } from '../SwitchField';

export default {
  title: 'Templates / Components / fields',
  component: SwitchFieldComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SwitchFieldComponent>;

export const SwitchField = (props: SwitchFieldProps) => (
  <SwitchFieldComponent {...props} />
);
