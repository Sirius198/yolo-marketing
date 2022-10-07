import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PrescriptionPaneComponent, {
  defaultProps,
} from '../PrescriptionPane';

export default {
  title: 'Dashboard / Sections / PrescriptionPane',
  component: PrescriptionPaneComponent,
  argTypes: {
    onChevronClick: { action: 'Chevron clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PrescriptionPaneComponent>;

const Template: ComponentStory<typeof PrescriptionPaneComponent> = (
  args
) => <PrescriptionPaneComponent {...args} />;

const { onChevronClick, ...rest } = defaultProps;
export const PrescriptionPane = Template.bind({});
PrescriptionPane.args = rest;
