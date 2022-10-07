import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PaymentMethodsComponent, { defaultProps } from '../PaymentMethods';

export default {
  title: 'Dashboard / Sections / PaymentMethods',
  component: PaymentMethodsComponent,
  argyTypes: {
    onDeleteClick: { action: 'Delete clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PaymentMethodsComponent>;

const Template: ComponentStory<typeof PaymentMethodsComponent> = (
  args
) => <PaymentMethodsComponent {...args} />;

const { onDeleteClick, ...rest } = defaultProps;
export const PaymentMethods = Template.bind({});
PaymentMethods.args = rest;
