import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SidebarComponent, {
  SidebarProps,
  SidebarResponsive as SidebarResponsiveComponent,
} from './Sidebar';

export default {
  title: 'Templates / Components / sidebar',
  component: SidebarComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SidebarComponent>;

export const Sidebar = (props: SidebarProps) => (
  <SidebarComponent {...props} />
);

export const SidebarResponsive = (props: SidebarProps) => (
  <SidebarResponsiveComponent {...props} />
);
