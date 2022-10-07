import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChatMessageComponent, { defaultProps } from '../ChatMessage';

export default {
  title: 'Dashboard / Components / ChatMessage',
  component: ChatMessageComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChatMessageComponent>;

const Template: ComponentStory<typeof ChatMessageComponent> = (args) => (
  <ChatMessageComponent {...args} />
);

export const ChatMessage = Template.bind({});
ChatMessage.args = defaultProps;
