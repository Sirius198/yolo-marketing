import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MainCommunitySectionComponent, {
  MainCommunitySectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Main',
  component: MainCommunitySectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MainCommunitySectionComponent>;

export const Community = (props: MainCommunitySectionProps) => (
  <MainCommunitySectionComponent {...props} />
);
