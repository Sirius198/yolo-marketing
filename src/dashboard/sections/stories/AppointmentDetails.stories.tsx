import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AppointmentDetailsComponent, {
  defaultProps,
} from '../AppointmentDetails';

export default {
  title: 'Dashboard / Sections / AppointmentDetails',
  component: AppointmentDetailsComponent,
  argTypes: {
    chatOnClick: { action: 'Chat clicked' },
    joinOnClick: { action: 'Join clicked' },
    onClickCloseIcon: { action: 'Close icon clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center width="750px" mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AppointmentDetailsComponent>;

const Template: ComponentStory<typeof AppointmentDetailsComponent> = (
  args
) => <AppointmentDetailsComponent {...args} />;

export const AppointmentDetails = Template.bind({});
const { chatOnClick, joinOnClick, onClickCloseIcon, ...rest } =
  defaultProps;
AppointmentDetails.args = rest;
