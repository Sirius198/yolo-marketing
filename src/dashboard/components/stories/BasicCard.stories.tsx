import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BasicCardComponent from '../Cards/BasicCard';

export default {
  title: 'Dashboard / Components / Cards / BasicCard',
  component: BasicCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BasicCardComponent>;

const Template: ComponentStory<typeof BasicCardComponent> = (args) => (
  <BasicCardComponent {...args} />
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  primaryText: 'Dr. Jean Claude',
  leftAdornment: <>DJ</>,
  rightAdornment: <button>Click</button>,
  bgColor: '#FFF8F8',
  secondaryText: '12 July, Sunday @ 4.00',
};
