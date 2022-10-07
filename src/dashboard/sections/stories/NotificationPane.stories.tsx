import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NotificationPaneComponent, {
  defaultProps,
} from '../NotificationPane';

export default {
  title: 'Dashboard / Sections / NotificationPane',
  component: NotificationPaneComponent,
  argTypes: {
    onClickCloseIcon: { action: 'Close icon clicked' },
    onChevronClick: { action: 'Chevron clicked' },
    onClearAllClick: { action: 'Clear all clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NotificationPaneComponent>;

const Template: ComponentStory<typeof NotificationPaneComponent> = (
  args
) => <NotificationPaneComponent {...args} />;

const { onChevronClick, onClearAllClick, onClickCloseIcon, ...rest } =
  defaultProps;
export const NotificationPane = Template.bind({});
NotificationPane.args = rest;
