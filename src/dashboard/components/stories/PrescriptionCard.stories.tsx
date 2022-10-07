import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PrescriptionCardComponent, {
  defaultProps,
} from '../Cards/PrescriptionCard';

export default {
  title: 'Dashboard / Components / Cards / PrescriptionCard',
  component: PrescriptionCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PrescriptionCardComponent>;

const Template: ComponentStory<typeof PrescriptionCardComponent> = (
  args
) => <PrescriptionCardComponent {...args} />;

export const PrescriptionCard = Template.bind({});
PrescriptionCard.args = defaultProps;
