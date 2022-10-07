import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import FooterAuthDefaultComponent, {
  FooterAuthDefaultProps,
} from '../FooterAuthDefault';

export default {
  title: 'Templates / Components / footer',
  component: FooterAuthDefaultComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof FooterAuthDefaultComponent>;

export const FooterAuthDefault = (props: FooterAuthDefaultProps) => (
  <FooterAuthDefaultComponent {...props} />
);
