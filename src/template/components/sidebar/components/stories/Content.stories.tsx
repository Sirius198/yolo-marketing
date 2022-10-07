import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ContentComponent, { ContentProps } from '../Content';

export default {
  title: 'Templates / Components / sidebar / components',
  component: ContentComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ContentComponent>;

export const Content = (props: ContentProps) => (
  <ContentComponent {...props} />
);
