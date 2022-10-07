import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SquadSharingSectionComponent, {
  SquadSharingSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Squad',
  component: SquadSharingSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SquadSharingSectionComponent>;

export const SharingIsCaring = (
  props: SquadSharingSectionProps
) => <SquadSharingSectionComponent {...props} />;
