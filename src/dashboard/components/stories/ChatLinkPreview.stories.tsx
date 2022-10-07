import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ChatLinkPreviewComponent, {
  defaultProps,
} from '../ChatLinkPreview';

export default {
  title: 'Dashboard / Components / ChatLinkPreview',
  component: ChatLinkPreviewComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ChatLinkPreviewComponent>;

const Template: ComponentStory<typeof ChatLinkPreviewComponent> = (
  args
) => <ChatLinkPreviewComponent {...args} />;

export const ChatLinkPreview = Template.bind({});
ChatLinkPreview.args = defaultProps;
