import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import UserActivityComponent, { UserActivityProps } from '../UserActivity';

export default {
  title: 'Templates / Sections / main / users / reports / components',
  component: UserActivityComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof UserActivityComponent>;

export const UserActivity = (props: UserActivityProps) => (
  <UserActivityComponent {...props} />
);
