import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import FooterAuthCenteredComponent, {
  FooterAuthCenteredProps,
} from '../FooterAuthCentered';

export default {
  title: 'Templates / Components / footer',
  component: FooterAuthCenteredComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof FooterAuthCenteredComponent>;

export const FooterAuthCentered = (props: FooterAuthCenteredProps) => (
  <FooterAuthCenteredComponent {...props} />
);
