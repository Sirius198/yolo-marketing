import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ReviewsTestimonialSectionComponent, {
  ReviewsTestimonialSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Reviews',
  component: ReviewsTestimonialSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ReviewsTestimonialSectionComponent>;

export const Testimonial = (
  props: ReviewsTestimonialSectionProps
) => <ReviewsTestimonialSectionComponent {...props} />;
