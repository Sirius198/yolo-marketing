import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SocialsComponent, { SocialsProps } from '../Socials';

export default {
  title: 'Templates / Sections / main / account / settings / components',
  component: SocialsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SocialsComponent>;

export const Socials = (props: SocialsProps) => (
  <SocialsComponent {...props} />
);
