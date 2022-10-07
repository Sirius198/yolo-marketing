import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AppointmentCardComponent, {
  defaultProps,
} from '../Cards/AppointmentCard';

export default {
  title: 'Dashboard / Components / Cards / AppointmentCard',
  component: AppointmentCardComponent,
  argTypes: {
    chatOnClick: { action: 'Chat clicked' },
    joinOnClick: { action: 'Join clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AppointmentCardComponent>;

const Template: ComponentStory<typeof AppointmentCardComponent> = (
  args
) => <AppointmentCardComponent {...args} />;

export const AppointmentCard = Template.bind({});

// as the on click methods are defined in argTypes, there's no need to pass them in. This ensures when we click a button
// the event is displayed in the Storybook actions tab
const { chatOnClick, joinOnClick, ...rest } = defaultProps;
AppointmentCard.args = rest;
