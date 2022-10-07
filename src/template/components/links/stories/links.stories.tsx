import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

const DummyComponent = () => {
  return (
    <div>
      <NextChakraLink href={'123'} />
    </div>
  );
};

import { NextChakraLink } from '../links';

export default {
  title: 'Templates / Components / Links',
  component: DummyComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DummyComponent>;

export const Links = () => <NextChakraLink href={'123'} />;
