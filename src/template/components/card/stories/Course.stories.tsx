import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import Course, { CourseProps } from '../Course';

export default {
  title: 'Templates / Components / Card',
  component: Course,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof Course>;

export const CourseCard = (props: CourseProps) => <Course {...props} />;
