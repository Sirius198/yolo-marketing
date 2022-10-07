import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InputFieldComponent, { InputFieldProps } from '../InputField';

export default {
  title: 'Templates / Components / fields',
  component: InputFieldComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InputFieldComponent>;

export const InputField = (props: InputFieldProps) => (
  <InputFieldComponent {...props} />
);
