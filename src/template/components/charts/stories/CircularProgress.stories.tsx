import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import CircularProgressComponent, {
  CircularProgressProps,
} from '../CircularProgress';

export default {
  title: 'Templates / Components / Charts',
  component: CircularProgressComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof CircularProgressComponent>;

export const CircularProgress = (props: CircularProgressProps) => (
  <CircularProgressComponent {...props} />
);
