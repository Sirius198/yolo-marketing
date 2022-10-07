import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import RatingComponent, { RatingProps } from '../Rating';

export default {
  title: 'Templates / Sections / main / account / coursePage / components',
  component: RatingComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof RatingComponent>;

export const Rating = (props: RatingProps) => (
  <RatingComponent {...props} />
);
