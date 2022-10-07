import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NotificationCardComponent, {
  defaultProps,
} from '../Cards/NotificationCard';

export default {
  title: 'Dashboard / Components / Cards / NotificationCard',
  component: NotificationCardComponent,
  argTypes: {
    onClickCloseIcon: { action: 'Close icon clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12" bgColor="teal.100">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NotificationCardComponent>;

const Template: ComponentStory<typeof NotificationCardComponent> = (
  args
) => <NotificationCardComponent {...args} />;

const { onClickCloseIcon, ...rest } = defaultProps;
export const NotificationCard = Template.bind({});
NotificationCard.args = rest;
