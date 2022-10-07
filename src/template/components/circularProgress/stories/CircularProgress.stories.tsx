import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import CircularProgressComponent from '../CircularProgress';

export default {
  title: 'Templates / Components / CircularProgress',
  component: CircularProgressComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof CircularProgressComponent>;

export const CircularProgress = () => <CircularProgressComponent />;
