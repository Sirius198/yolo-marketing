import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChatComponent, { defaultProps } from '../Chat';

export default {
  title: 'Dashboard / Sections / Chat',
  component: ChatComponent,
  argTypes: {
    onSendClick: { action: 'Send clicked' },
    onEllipsisClick: { action: 'Ellipsis clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChatComponent>;

const Template: ComponentStory<typeof ChatComponent> = (args) => (
  <ChatComponent {...args} />
);

const TemplateWithRestrictedHeight: ComponentStory<
  typeof ChatComponent
> = (args) => (
  <div style={{ height: '300px', width: '100%' }}>
    <ChatComponent {...args} />
  </div>
);

const { onEllipsisClick, onSendClick, ...rest } = defaultProps;
export const Chat = Template.bind({});
Chat.args = rest;

export const ChatWithLimitedHeight = TemplateWithRestrictedHeight.bind({});
ChatWithLimitedHeight.args = rest;
