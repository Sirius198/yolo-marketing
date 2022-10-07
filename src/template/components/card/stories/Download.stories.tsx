import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import Download, { DownloadProps } from '../Download';

export default {
  title: 'Templates / Components / Card',
  component: Download,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof Download>;

export const DownloadCard = (props: DownloadProps) => (
  <Download {...props} />
);
