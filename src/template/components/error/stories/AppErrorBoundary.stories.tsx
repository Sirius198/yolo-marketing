import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AppErrorBoundaryComponent, {
  AppErrorBoundaryProps,
} from '../AppErrorBoundary';

export default {
  title: 'Templates / Components / error',
  component: AppErrorBoundaryComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AppErrorBoundaryComponent>;

export const AppErrorBoundary = (props: AppErrorBoundaryProps) => (
  <AppErrorBoundaryComponent {...props} />
);
