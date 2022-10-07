import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import LogoComponent, { ILogoProps as LogoProps } from './Logo';

export default {
  title: 'Templates / Components',
  component: LogoComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof LogoComponent>;

export const Logo = (props: LogoProps) => <LogoComponent {...props} />;
