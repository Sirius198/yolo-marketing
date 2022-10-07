import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PlanComponent, {
  CircularProgressProps as PlanProps,
} from '../Plan';

export default {
  title: 'Templates / Sections / smartHome / components',
  component: PlanComponent,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PlanComponent>;

export const Plan = (props: PlanProps) => <PlanComponent {...props} />;
