import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NotificationsComponent, {
  NotificationsProps,
} from '../Notifications';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: NotificationsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NotificationsComponent>;

export const Notifications = (props: NotificationsProps) => (
  <NotificationsComponent {...props} />
);
