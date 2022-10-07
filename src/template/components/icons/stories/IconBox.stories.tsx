import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import IconBoxComponent, { IconBoxProps } from '../IconBox';

export default {
  title: 'Templates / Components / icons',
  component: IconBoxComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof IconBoxComponent>;

export const IconBox = (props: IconBoxProps) => (
  <IconBoxComponent {...props} />
);
