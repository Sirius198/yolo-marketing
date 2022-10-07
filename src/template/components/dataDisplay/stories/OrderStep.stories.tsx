import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import OrderStepComponent, { OrderStepProps } from '../OrderStep';

export default {
  title: 'Templates / Components / dataDisplay',
  component: OrderStepComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof OrderStepComponent>;

export const OrderStep = (props: OrderStepProps) => (
  <OrderStepComponent {...props} />
);
