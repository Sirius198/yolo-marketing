import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DateSelectorComponent, { defaultProps } from '../DateSelector';

export default {
  title: 'Dashboard / Components / DateSelector',
  argTypes: {
    onChange: { action: 'Date changed' },
  },
  component: DateSelectorComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DateSelectorComponent>;

const Template: ComponentStory<typeof DateSelectorComponent> = (args) => (
  <DateSelectorComponent {...args} />
);

const { onChange, ...rest } = defaultProps;
export const DateSelector = Template.bind({});
DateSelector.args = rest;
