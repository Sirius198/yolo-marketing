import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import TwoFactorComponent, { TwoFactorProps } from '../TwoFactor';

export default {
  title: 'Templates / Sections / main / account / settings / components',
  component: TwoFactorComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof TwoFactorComponent>;

export const TwoFactor = (props: TwoFactorProps) => (
  <TwoFactorComponent {...props} />
);
