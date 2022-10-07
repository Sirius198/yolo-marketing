import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NavSectionComponent, { defaultProps } from '../NavSection';

export default {
  title: 'Dashboard / Sections / NavSection',
  component: NavSectionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NavSectionComponent>;

const Template: ComponentStory<typeof NavSectionComponent> = (args) => (
  <NavSectionComponent {...args} />
);

export const NavSection = Template.bind({});
NavSection.args = defaultProps;
