import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import { Loading as LoadingComponent, LoadingProps } from '../Loading';

export default {
  title: 'Templates / Components / loading',
  component: LoadingComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LoadingComponent>;

export const Loading = (props: LoadingProps) => (
  <LoadingComponent {...props} />
);
