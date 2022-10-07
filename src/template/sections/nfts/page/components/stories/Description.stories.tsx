import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import DescriptionComponent, {
  BannerProps as DescriptionProps,
} from '../Description';

export default {
  title: 'Templates / Sections / nfts / page / components',
  component: DescriptionComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof DescriptionComponent>;

export const Description = (props: DescriptionProps) => (
  <DescriptionComponent {...props} />
);
