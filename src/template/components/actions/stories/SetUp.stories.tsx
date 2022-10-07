import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SetUpComponent, { SetUpProps } from '../SetUp';

export default {
  title: 'Templates / Components / Actions',
  component: SetUpComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SetUpComponent>;

export const SetUp = (props: SetUpProps) => <SetUpComponent {...props} />;
