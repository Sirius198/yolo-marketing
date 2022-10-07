import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ReferralsTableComponent, {
  ReferralsTableProps,
} from '../ReferralsTable';

export default {
  title:
    'Templates / Sections / main / ecommerce / referrals / components',
  component: ReferralsTableComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ReferralsTableComponent>;

export const ReferralsTable = (props: ReferralsTableProps) => (
  <ReferralsTableComponent {...props} />
);
