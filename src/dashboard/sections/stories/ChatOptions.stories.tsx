import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChatOptionsComponent, { defaultProps } from '../ChatOptions';

export default {
  title: 'Dashboard / Sections / ChatOptions',
  component: ChatOptionsComponent,
  argTypes: {
    onClickBell: { action: 'Bell clicked' },
    onChevronClick: { action: 'Back chevron clicked' },
    onMediaChevronClick: { action: 'Media chevron clicked' },
    onNewAppointmentClick: { action: 'New appointment clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChatOptionsComponent>;

const Template: ComponentStory<typeof ChatOptionsComponent> = (args) => (
  <ChatOptionsComponent {...args} />
);

const {
  onClickBell,
  onChevronClick,
  onMediaChevronClick,
  onNewAppointmentClick,
  ...rest
} = defaultProps;
export const ChatOptions = Template.bind({});
ChatOptions.args = rest;
