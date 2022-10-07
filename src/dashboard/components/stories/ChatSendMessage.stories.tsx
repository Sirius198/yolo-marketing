import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChatSendMessageComponent, {
  defaultProps,
} from '../ChatSendMessage';

export default {
  title: 'Dashboard / Components / ChatSendMessage',
  component: ChatSendMessageComponent,
  argTypes: {
    onSendClick: { action: 'Send clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChatSendMessageComponent>;

const Template: ComponentStory<typeof ChatSendMessageComponent> = (
  args
) => <ChatSendMessageComponent {...args} />;

export const ChatSendMessage = Template.bind({});
const { onSendClick, ...rest } = defaultProps;
ChatSendMessage.args = rest;
