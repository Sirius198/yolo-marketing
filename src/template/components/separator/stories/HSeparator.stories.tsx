import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center, FlexProps } from '@chakra-ui/react';
import { HSeparator as HSeparatorComponent } from '../Separator';

export default {
  title: 'Templates / Components / separator',
  component: HSeparatorComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof HSeparatorComponent>;

export const HSeparator = (props: FlexProps) => (
  <HSeparatorComponent {...props} />
);
