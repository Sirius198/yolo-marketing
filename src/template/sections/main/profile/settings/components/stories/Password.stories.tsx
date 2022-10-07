import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PasswordComponent, { PasswordProps } from '../Password';

export default {
  title: 'Templates / Sections / main / profile / settings / components',
  component: PasswordComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PasswordComponent>;

export const Password = (props: PasswordProps) => (
  <PasswordComponent {...props} />
);
