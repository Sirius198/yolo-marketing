import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import LinksComponent, { LinksProps } from '../Links';

export default {
  title: 'Templates / Components / sidebar / components',
  component: LinksComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LinksComponent>;

export const Links = (props: LinksProps) => <LinksComponent {...props} />;
