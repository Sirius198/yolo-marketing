import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TransparentMenuComponent, {
  TransparentMenuProps,
} from '../TransparentMenu';

export default {
  title: 'Templates / Components / menu',
  component: TransparentMenuComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TransparentMenuComponent>;

export const TransparentMenu = (props: TransparentMenuProps) => (
  <TransparentMenuComponent {...props} />
);
