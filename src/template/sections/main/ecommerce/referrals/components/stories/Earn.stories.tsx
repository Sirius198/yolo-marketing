import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import EarnComponent, { EarnProps } from '../Earn';

export default {
  title:
    'Templates / Sections / main / ecommerce / referrals / components',
  component: EarnComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof EarnComponent>;

export const Earn = (props: EarnProps) => <EarnComponent {...props} />;
