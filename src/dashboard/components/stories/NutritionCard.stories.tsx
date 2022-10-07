import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import NutritionCardComponent, {
  defaultProps,
} from '../Cards/NutritionCard';

export default {
  title: 'Dashboard / Components / Cards / NutritionCard',
  component: NutritionCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof NutritionCardComponent>;

const Template: ComponentStory<typeof NutritionCardComponent> = (args) => (
  <NutritionCardComponent {...args} />
);

export const NutritionCard = Template.bind({});
NutritionCard.args = defaultProps;
