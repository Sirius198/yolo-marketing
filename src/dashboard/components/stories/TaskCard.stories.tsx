import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TaskCardComponent, { defaultProps } from '../Cards/TaskCard';

export default {
  title: 'Dashboard / Components / Cards / TaskCard',
  component: TaskCardComponent,
  argTypes: {
    tickOnClick: { action: 'Tick clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TaskCardComponent>;

const Template: ComponentStory<typeof TaskCardComponent> = (args) => (
  <TaskCardComponent {...args} />
);

const { tickOnClick, ...rest } = defaultProps;
export const TaskCard = Template.bind({});
TaskCard.args = rest;
