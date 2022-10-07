import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ProjectStatusComponent, {
  ProjectStatusProps,
} from '../ProjectStatus';

export default {
  title: 'Templates / Sections / carInterface / components',
  component: ProjectStatusComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ProjectStatusComponent>;

export const ProjectStatus = (props: ProjectStatusProps) => (
  <ProjectStatusComponent {...props} />
);
