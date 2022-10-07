import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ProjectsComponent, { ProjectsProps } from '../Projects';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: ProjectsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ProjectsComponent>;

export const Projects = (props: ProjectsProps) => (
  <ProjectsComponent {...props} />
);
