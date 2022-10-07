import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PricingPlanSectionComponent, {
  PricingPlanSectionProps,
} from '.';

export default {
  title: 'Marketing / Sections / Pricing',
  component: PricingPlanSectionComponent,
  decorators: [
    (Story: any) => (
      <Center shadow="sm">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PricingPlanSectionComponent>;

export const Plan = (
  props: PricingPlanSectionProps
) => <PricingPlanSectionComponent {...props} />;
