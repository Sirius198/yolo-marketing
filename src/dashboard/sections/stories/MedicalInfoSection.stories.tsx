import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MedicalInfoSectionComponent, {
  defaultProps,
} from '../MedicalInfoSection';

export default {
  title: 'Dashboard / Sections / MedicalInfoSection',
  component: MedicalInfoSectionComponent,
  argTypes: {
    onClickUpdate: { action: 'Update clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MedicalInfoSectionComponent>;

const Template: ComponentStory<typeof MedicalInfoSectionComponent> = (
  args
) => <MedicalInfoSectionComponent {...args} />;

const { onClickUpdate, ...rest } = defaultProps;
export const MedicalInfoSection = Template.bind({});
MedicalInfoSection.args = rest;
