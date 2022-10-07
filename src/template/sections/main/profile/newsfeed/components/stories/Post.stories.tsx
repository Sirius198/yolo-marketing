import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PostComponent, { PostProps } from '../Post';

export default {
  title: 'Templates / Sections / main / profile / newsfeed / components',
  component: PostComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PostComponent>;

export const Post = (props: PostProps) => <PostComponent {...props} />;
