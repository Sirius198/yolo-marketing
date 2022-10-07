import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import {
  ItemContent as ItemContentComponent,
  ItemContentProps,
} from '../ItemContent';

export default {
  title: 'Templates / Components / menu',
  component: ItemContentComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ItemContentComponent>;

export const ItemContent = (props: ItemContentProps) => (
  <ItemContentComponent {...props} />
);
