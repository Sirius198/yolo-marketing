import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import Mastercard, { MastercardProps } from '../Mastercard';

export default {
  title: 'Templates / Components / Card',
  component: Mastercard,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof Mastercard>;

export const MastercardCard = (props: MastercardProps) => (
  <Mastercard {...props} />
);
