import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NewsletterComponent, { NewsletterProps } from '../Newsletter';

export default {
  title: 'Templates / Sections / main / account / settings / components',
  component: NewsletterComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NewsletterComponent>;

export const Newsletter = (props: NewsletterProps) => (
  <NewsletterComponent {...props} />
);
