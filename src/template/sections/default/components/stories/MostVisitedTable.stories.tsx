import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MostVisitedTableComponent, {
  MostVisitedTableProps,
} from '../MostVisitedTable';

export default {
  title: 'Templates / Sections / default / components',
  component: MostVisitedTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MostVisitedTableComponent>;

export const MostVisitedTable = (props: MostVisitedTableProps) => (
  <MostVisitedTableComponent {...props} />
);
