import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SquadContentComponent, {
  SquadContentProps,
} from '.';

export default {
  title: 'Marketing / Sections / Squad',
  component: SquadContentComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SquadContentComponent>;

export const Content = (
  props: SquadContentProps
) => <SquadContentComponent {...props} />;
