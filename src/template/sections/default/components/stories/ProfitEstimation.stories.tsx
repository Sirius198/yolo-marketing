import React from 'react';
import { ComponentStory, ComponentMeta, StoryFn } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import ProfitEstimationComponent, {
  ProfitEstimationProps,
} from '../ProfitEstimation';

export default {
  title: 'Templates / Sections / default / components',
  component: ProfitEstimationComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof ProfitEstimationComponent>;

export const ProfitEstimation = (props: ProfitEstimationProps) => (
  <ProfitEstimationComponent {...props} />
);
