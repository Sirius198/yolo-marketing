import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TestimonialSectionComponent, { TestimonialSectionProps } from '.';

export default {
  title: 'Marketing / Sections / Common',
  component: TestimonialSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TestimonialSectionComponent>;

export const Testimonial = (props: TestimonialSectionProps) => (
  <TestimonialSectionComponent {...props} />
);
