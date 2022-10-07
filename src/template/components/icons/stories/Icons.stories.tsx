import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import { YoloHealthLogo } from '../Icons';

export default {
  title: 'Templates / Components / icons',
  component: YoloHealthLogo,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof YoloHealthLogo>;

export const Icons = () => <YoloHealthLogo />;
