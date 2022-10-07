import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import AddPaymentMethodsComponent, {
  defaultProps,
} from '../AddPaymentMethod';

export default {
  title: 'Dashboard / Sections / AddPaymentMethods',
  component: AddPaymentMethodsComponent,
  argyTypes: {
    onClose: { action: 'Close clicked' },
    onSubmit: { action: 'Submitted form successfully' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof AddPaymentMethodsComponent>;

const Template: ComponentStory<typeof AddPaymentMethodsComponent> = (
  args
) => <AddPaymentMethodsComponent {...args} />;

const { onClose, onSubmit, ...rest } = defaultProps;
export const AddPaymentMethods = Template.bind({});
AddPaymentMethods.args = rest;
