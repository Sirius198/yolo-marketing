import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChatTitleCardComponent, {
  defaultProps,
} from '../Cards/ChatTitleCard';

export default {
  title: 'Dashboard / Components / Cards / ChatTitleCard',
  component: ChatTitleCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChatTitleCardComponent>;

const Template: ComponentStory<typeof ChatTitleCardComponent> = (args) => (
  <ChatTitleCardComponent {...args} />
);

export const ChatTitleCard = Template.bind({});
ChatTitleCard.args = defaultProps;
