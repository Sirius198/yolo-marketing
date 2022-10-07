import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ExerciseCardComponent, {
  defaultProps,
} from '../Cards/ExerciseCard';

export default {
  title: 'Dashboard / Components / Cards / ExerciseCard',
  component: ExerciseCardComponent,
  argTypes: {
    onInfoClick: { action: 'Info clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ExerciseCardComponent>;

const Template: ComponentStory<typeof ExerciseCardComponent> = (args) => (
  <ExerciseCardComponent {...args} />
);

const { onInfoClick, ...rest } = defaultProps;
export const ExerciseCard = Template.bind({});
ExerciseCard.args = rest;
