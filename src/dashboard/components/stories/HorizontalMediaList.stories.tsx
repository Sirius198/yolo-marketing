import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import HorizontalMediaListComponent, {
  defaultProps,
} from '../HorizontalMediaList';

export default {
  title: 'Dashboard / Components / HorizontalMediaList',
  component: HorizontalMediaListComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof HorizontalMediaListComponent>;

const Template: ComponentStory<typeof HorizontalMediaListComponent> = (
  args
) => <HorizontalMediaListComponent {...args} />;

export const HorizontalMediaList = Template.bind({});
HorizontalMediaList.args = defaultProps;
