import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AppointmentListHeaderComponent, {
  defaultProps,
} from '../AppointmentListHeader';

export default {
  title: 'Dashboard / Sections / AppointmentListHeader',
  component: AppointmentListHeaderComponent,
  argTypes: {
    chipOnClick: { action: 'Chip clicked' },
    newAppointmentOnClick: { action: 'New appointment clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AppointmentListHeaderComponent>;

const Template: ComponentStory<typeof AppointmentListHeaderComponent> = (
  args
) => <AppointmentListHeaderComponent {...args} />;

export const AppointmentListHeader = Template.bind({});
const { chipOnClick, newAppointmentOnClick, ...rest } = defaultProps;
AppointmentListHeader.args = rest;
