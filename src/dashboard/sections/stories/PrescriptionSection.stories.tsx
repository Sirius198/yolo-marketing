import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PrescriptionSectionComponent, {
  defaultProps,
} from '../PrescriptionSection';

export default {
  title: 'Dashboard / Sections / PrescriptionSection',
  component: PrescriptionSectionComponent,
  argTypes: {
    onInfoClick: { action: 'Info clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PrescriptionSectionComponent>;

const Template: ComponentStory<typeof PrescriptionSectionComponent> = (
  args
) => <PrescriptionSectionComponent {...args} />;

const { onInfoClick, ...rest } = defaultProps;
export const PrescriptionSection = Template.bind({});
PrescriptionSection.args = rest;
