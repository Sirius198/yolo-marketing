import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import HoursComponent, { HoursProps } from '../Hours';

export default {
  title: 'Templates / Sections / main / account / courses / components',
  component: HoursComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof HoursComponent>;

export const Hours = (props: HoursProps) => <HoursComponent {...props} />;
