import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ProjectStatusComponent, {
  ProjectStatusProps,
} from '../ProjectStatus';

export default {
  title: 'Templates / Sections / default / components',
  component: ProjectStatusComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ProjectStatusComponent>;

export const ProjectStatus = (props: ProjectStatusProps) => (
  <ProjectStatusComponent {...props} />
);
