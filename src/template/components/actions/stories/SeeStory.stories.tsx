import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SeeStoryComponent, { SeeStoryProps } from '../SeeStory';

export default {
  title: 'Templates / Components / Actions',
  component: SeeStoryComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SeeStoryComponent>;

// export const basic: StoryFn<SeeStoryProps> = (props) => (
//   <SeeStory {...props} />
// );
export const SeeStory = { args: { name: 'This is a Nnenna See story' } };
