import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TextFieldComponent, { TextFieldProps } from '../TextField';

export default {
  title: 'Templates / Components / fields',
  component: TextFieldComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TextFieldComponent>;

export const TextField = (props: TextFieldProps) => (
  <TextFieldComponent {...props} />
);
