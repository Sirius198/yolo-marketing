import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TagsFieldComponent, { TagsFieldProps } from '../TagsField';

export default {
  title: 'Templates / Components / fields',
  component: TagsFieldComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TagsFieldComponent>;

export const TagsField = (props: TagsFieldProps) => (
  <TagsFieldComponent {...props} />
);
