import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@chakra-ui/react';

import ButtonActionComponent, { ButtonActionProps } from '../ButtonAction';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates / Components / Actions',
  component: ButtonActionComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: { control: 'text' },
  },
  decorators: [
    (Story: any) => (
      <Container mt="40px" display="flex" flexWrap="wrap" gap="4">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof ButtonActionComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonActionComponent> = (args) => (
  <ButtonActionComponent {...args} />
);

export const ButtonAction = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonAction.args = {
  name: 'Basic Action',
  date: 'March 20th, 2022',
  actionName: 'Add',
  sum: '24',
  action: () => {},
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
