import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ThreadCardComponent, { defaultProps } from '../Cards/ThreadCard';

export default {
  title: 'Dashboard / Components / Cards / ThreadCard',
  component: ThreadCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ThreadCardComponent>;

const Template: ComponentStory<typeof ThreadCardComponent> = (args) => (
  <ThreadCardComponent {...args} />
);

export const ThreadCard = Template.bind({});
ThreadCard.args = defaultProps;
