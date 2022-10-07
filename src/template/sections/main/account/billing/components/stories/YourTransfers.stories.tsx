import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import YourTransfersComponent, {
  YourTransfersProps,
} from '../YourTransfers';

export default {
  title: 'Templates / Sections / main / account / billing / components',
  component: YourTransfersComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof YourTransfersComponent>;

export const YourTransfers = (props: YourTransfersProps) => (
  <YourTransfersComponent {...props} />
);
