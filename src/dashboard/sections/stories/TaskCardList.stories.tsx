import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TaskCardListComponent, { defaultProps } from '../TaskCardList';

export default {
  title: 'Dashboard / Sections / TaskCardList',
  component: TaskCardListComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TaskCardListComponent>;

const Template: ComponentStory<typeof TaskCardListComponent> = (args) => (
  <TaskCardListComponent {...args} />
);

export const TaskCardList = Template.bind({});
TaskCardList.args = defaultProps;
