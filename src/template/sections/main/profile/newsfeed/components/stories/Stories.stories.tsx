import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import StoriesComponent, { StoriesProps } from '../Stories';

export default {
  title: 'Templates / Sections / main / profile / newsfeed / components',
  component: StoriesComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof StoriesComponent>;

export const Stories = (props: StoriesProps) => (
  <StoriesComponent {...props} />
);
