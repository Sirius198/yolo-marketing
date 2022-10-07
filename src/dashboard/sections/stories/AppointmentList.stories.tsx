import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AppointmentListComponent, {
  defaultProps,
} from '../AppointmentList';

export default {
  title: 'Dashboard / Sections / AppointmentList',
  component: AppointmentListComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AppointmentListComponent>;

const Template: ComponentStory<typeof AppointmentListComponent> = (
  args
) => <AppointmentListComponent {...args} />;

export const AppointmentList = Template.bind({});
AppointmentList.args = defaultProps;
