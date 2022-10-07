import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import VerticalSelectorComponent, {
  defaultProps,
} from '../VerticalSelector';

export default {
  title: 'Dashboard / Components / VerticalSelector',
  component: VerticalSelectorComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof VerticalSelectorComponent>;

const Template: ComponentStory<typeof VerticalSelectorComponent> = (
  args
) => <VerticalSelectorComponent {...args} />;

export const VerticalSelector = Template.bind({});
VerticalSelector.args = defaultProps;
