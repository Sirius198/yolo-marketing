import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InstructorComponent, { InstructorProps } from '../Instructor';

export default {
  title: 'Templates / Sections / main / account / coursePage / components',
  component: InstructorComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InstructorComponent>;

export const Instructor = (props: InstructorProps) => (
  <InstructorComponent {...props} />
);
