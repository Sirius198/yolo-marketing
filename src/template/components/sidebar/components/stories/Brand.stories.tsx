import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import BrandComponent, { BrandProps } from '../Brand';

export default {
  title: 'Templates / Components / sidebar / components',
  component: BrandComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof BrandComponent>;

export const Brand = (props: BrandProps) => <BrandComponent {...props} />;
