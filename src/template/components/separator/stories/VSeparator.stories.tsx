import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center, FlexProps } from '@chakra-ui/react';
import { VSeparator as VSeparatorComponent } from '../Separator';

export default {
  title: 'Templates / Components / separator',
  component: VSeparatorComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof VSeparatorComponent>;

export const VSeparator = (props: FlexProps) => (
  <VSeparatorComponent {...props} />
);
