import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DoctorSectionComponent, { defaultProps } from '../DoctorSection';

export default {
  title: 'Dashboard / Sections / DoctorSection',
  component: DoctorSectionComponent,
  argTypes: {
    selectOnClick: { action: 'Select clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DoctorSectionComponent>;

const Template: ComponentStory<typeof DoctorSectionComponent> = (args) => (
  <DoctorSectionComponent {...args} />
);

const { selectOnClick, ...rest } = defaultProps;
export const DoctorSection = Template.bind({});
DoctorSection.args = rest;
