import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SquadQuoteSectionComponent, {
  SquadQuoteSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Squad',
  component: SquadQuoteSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SquadQuoteSectionComponent>;

export const Quote = (
  props: SquadQuoteSectionProps
) => <SquadQuoteSectionComponent {...props} />;
