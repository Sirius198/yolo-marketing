import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PaymentRadioComponent, { defaultProps } from '../PaymentRadio';

export default {
  title: 'Dashboard / Components / PaymentRadio',
  component: PaymentRadioComponent,
  argyTypes: {
    onChange: { action: 'Switch clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PaymentRadioComponent>;

const Template: ComponentStory<typeof PaymentRadioComponent> = (args) => (
  <PaymentRadioComponent {...args} />
);

const { onChange, ...rest } = defaultProps;
export const PaymentRadio = Template.bind({});
PaymentRadio.args = rest;
