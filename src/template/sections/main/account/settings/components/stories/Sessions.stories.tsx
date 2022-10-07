import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SessionsComponent, { SessionsProps } from '../Sessions';

export default {
  title: 'Templates / Sections / main / account / settings / components',
  component: SessionsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SessionsComponent>;

export const Sessions = (props: SessionsProps) => (
  <SessionsComponent {...props} />
);
