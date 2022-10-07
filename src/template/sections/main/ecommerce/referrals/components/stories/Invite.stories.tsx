import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InviteComponent, { InviteProps } from '../Invite';

export default {
  title:
    'Templates / Sections / main / ecommerce / referrals / components',
  component: InviteComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InviteComponent>;

export const Invite = (props: InviteProps) => (
  <InviteComponent {...props} />
);
