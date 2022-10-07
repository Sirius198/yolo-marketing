import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AppointmentDoctorCardComponent, {
  defaultProps,
} from '../Cards/AppointmentDoctorCard';

export default {
  title: 'Dashboard / Components / Cards / AppointmentDoctorCard',
  component: AppointmentDoctorCardComponent,
  argTypes: {
    selectOnClick: { action: 'Select clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AppointmentDoctorCardComponent>;

const Template: ComponentStory<typeof AppointmentDoctorCardComponent> = (
  args
) => <AppointmentDoctorCardComponent {...args} />;

const { selectOnClick, ...rest } = defaultProps;
export const AppointmentDoctorCard = Template.bind({});
AppointmentDoctorCard.args = rest;
