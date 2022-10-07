import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InstructionsSectionComponent, {
  defaultProps,
} from '../InstructionsSection';

export default {
  title: 'Dashboard / Sections / InstructionsSection',
  component: InstructionsSectionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InstructionsSectionComponent>;

const Template: ComponentStory<typeof InstructionsSectionComponent> = (
  args
) => <InstructionsSectionComponent {...args} />;

export const InstructionsSection = Template.bind({});
InstructionsSection.args = defaultProps;
