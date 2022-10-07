import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import FooterAdminComponent, { FooterAdminProps } from '../FooterAdmin';

export default {
  title: 'Templates / Components / footer',
  component: FooterAdminComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof FooterAdminComponent>;

export const FooterAdmin = (props: FooterAdminProps) => (
  <FooterAdminComponent {...props} />
);
