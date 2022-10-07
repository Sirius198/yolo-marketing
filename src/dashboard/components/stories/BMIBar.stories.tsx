import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BMIBarComponent, { defaultProps } from '../BMIBar';

export default {
  title: 'Dashboard / Components / BMIBar',
  component: BMIBarComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BMIBarComponent>;

const Template: ComponentStory<typeof BMIBarComponent> = (args) => (
  <BMIBarComponent {...args} />
);

export const BMIBar = Template.bind({});
BMIBar.args = defaultProps;
