import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MedicineCardComponent, {
  defaultProps,
} from '../Cards/MedicineCard';

export default {
  title: 'Dashboard / Components / Cards / MedicineCard',
  component: MedicineCardComponent,
  argTypes: {
    onInfoClick: { action: 'Info clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MedicineCardComponent>;

const Template: ComponentStory<typeof MedicineCardComponent> = (args) => (
  <MedicineCardComponent {...args} />
);

const { onInfoClick, ...rest } = defaultProps;
export const MedicineCard = Template.bind({});
MedicineCard.args = rest;
