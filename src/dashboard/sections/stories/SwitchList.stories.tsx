import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SwitchListComponent, { defaultProps } from '../SwitchList';

export default {
  title: 'Dashboard / Sections / SwitchList',
  component: SwitchListComponent,
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
} as ComponentMeta<typeof SwitchListComponent>;

const Template: ComponentStory<typeof SwitchListComponent> = (args) => (
  <SwitchListComponent {...args} />
);

const { onChange, ...rest } = defaultProps;
export const SwitchList = Template.bind({});
SwitchList.args = rest;
