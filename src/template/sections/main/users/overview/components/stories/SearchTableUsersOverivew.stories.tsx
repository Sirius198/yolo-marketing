import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SearchTableUsersOverviewComponent, {
  SearchTableUsersOverviewProps,
} from '../SearchTableUsersOverivew';

export default {
  title: 'Templates / Sections / main / users / overview / components',
  component: SearchTableUsersOverviewComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SearchTableUsersOverviewComponent>;

export const SearchTableUsersOverview = (
  props: SearchTableUsersOverviewProps
) => <SearchTableUsersOverviewComponent {...props} />;
