import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import CommentComponent, { CommentProps } from '../Comment';

export default {
  title: 'Templates / Components / dataDisplay',
  component: CommentComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof CommentComponent>;

export const Comment = (props: CommentProps) => (
  <CommentComponent {...props} />
);
