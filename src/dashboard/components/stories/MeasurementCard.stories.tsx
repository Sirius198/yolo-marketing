import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import MeasurementCardComponent, {
  defaultProps,
} from '../Cards/MeasurementCard';

export default {
  title: 'Dashboard / Components / Cards / MeasurementCard',
  component: MeasurementCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof MeasurementCardComponent>;

const Template: ComponentStory<typeof MeasurementCardComponent> = (
  args
) => <MeasurementCardComponent {...args} />;

export const MeasurementCard = Template.bind({});
MeasurementCard.args = defaultProps;
