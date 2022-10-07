import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SquadAboutSectionComponent, {
  SquadAboutSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Squad',
  component: SquadAboutSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SquadAboutSectionComponent>;

export const About = (
  props: SquadAboutSectionProps
) => <SquadAboutSectionComponent {...props} />;
