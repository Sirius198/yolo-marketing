import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import UserReportsTableComponent, {
  UserReportsTableProps,
} from '../UserReportsTable';

export default {
  title: 'Templates / Sections / main / users / reports / components',
  component: UserReportsTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof UserReportsTableComponent>;

export const UserReportsTable = (props: UserReportsTableProps) => (
  <UserReportsTableComponent {...props} />
);
