import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ProfileComponent, { ProfileProps } from '../Profile';

export default {
  title: 'Templates / Sections / main / account / settings / components',
  component: ProfileComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ProfileComponent>;

export const Profile = (props: ProfileProps) => (
  <ProfileComponent {...props} />
);
