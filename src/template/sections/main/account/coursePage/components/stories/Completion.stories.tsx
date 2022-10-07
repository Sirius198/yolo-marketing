import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import CompletionComponent, { CompletionProps } from '../Completion';

export default {
  title: 'Templates / Sections / main / account / coursePage / components',
  component: CompletionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof CompletionComponent>;

export const Completion = (props: CompletionProps) => (
  <CompletionComponent {...props} />
);
