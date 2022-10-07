import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import CourseInfoComponent, { CourseInfoProps } from '../CourseInfo';

export default {
  title: 'Templates / Sections / main / account / coursePage / components',
  component: CourseInfoComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof CourseInfoComponent>;

export const CourseInfo = (props: CourseInfoProps) => (
  <CourseInfoComponent {...props} />
);
