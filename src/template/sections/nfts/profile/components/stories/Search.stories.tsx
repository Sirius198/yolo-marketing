import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import {
  SearchBar as SearchComponent,
  SearchBarProps as SearchProps,
} from '../Search';

export default {
  title: 'Templates / Sections / nfts / profile / components',
  component: SearchComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SearchComponent>;

export const Search = (props: SearchProps) => (
  <SearchComponent {...props} />
);
