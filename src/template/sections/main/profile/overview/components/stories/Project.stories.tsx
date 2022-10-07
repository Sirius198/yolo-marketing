import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ProjectComponent, { ProjectProps } from '../Project';

export default {
  title: 'Templates / Sections / main / profile / overview / components',
  component: ProjectComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ProjectComponent>;

export const Project = (props: ProjectProps) => (
  <ProjectComponent {...props} />
);
