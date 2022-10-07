import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import YourCardComponent, { YourCardProps } from '../YourCard';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: YourCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof YourCardComponent>;

export const YourCard = (props: YourCardProps) => (
  <YourCardComponent {...props} />
);
