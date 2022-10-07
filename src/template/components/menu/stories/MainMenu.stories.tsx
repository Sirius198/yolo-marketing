import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainMenuComponent, { MainMenuProps } from '../MainMenu';

export default {
  title: 'Templates / Components / menu',
  component: MainMenuComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainMenuComponent>;

export const MainMenu = (props: MainMenuProps) => (
  <MainMenuComponent {...props} />
);
