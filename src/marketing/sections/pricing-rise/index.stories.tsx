import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PricingRiseSectionComponent, {
  PricingRiseSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Pricing',
  component: PricingRiseSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PricingRiseSectionComponent>;

export const RiseUp = (
  props: PricingRiseSectionProps
) => <PricingRiseSectionComponent {...props} />;
