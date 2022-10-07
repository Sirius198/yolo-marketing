import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SquadHeroSectionComponent, {
  SquadHeroSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Squad',
  component: SquadHeroSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SquadHeroSectionComponent>;

export const Hero = (
  props: SquadHeroSectionProps
) => <SquadHeroSectionComponent {...props} />;
