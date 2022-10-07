import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import WhatToExpectSectionComponent, {
  WhatToExpectSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Program',
  component: WhatToExpectSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof WhatToExpectSectionComponent>;

export const WhatToExpect = (
  props: WhatToExpectSectionProps
) => <WhatToExpectSectionComponent {...props} />;
