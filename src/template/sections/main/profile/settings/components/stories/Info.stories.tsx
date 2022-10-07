import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import InfoComponent, { InfoProps } from '../Info';

export default {
  title: 'Templates / Sections / main / profile / settings / components',
  component: InfoComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof InfoComponent>;

export const Info = (props: InfoProps) => <InfoComponent {...props} />;
