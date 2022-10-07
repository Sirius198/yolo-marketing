import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import YourCardComponent, { YourCardProps } from '../YourCard';

export default {
  title: 'Templates / Sections / default / components',
  component: YourCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof YourCardComponent>;

export const YourCard = (props: YourCardProps) => (
  <YourCardComponent {...props} />
);
