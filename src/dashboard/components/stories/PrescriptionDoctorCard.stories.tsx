import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PrescriptionDoctorCardComponent, {
  defaultProps,
} from '../Cards/PrescriptionDoctorCard';

export default {
  title: 'Dashboard / Components / Cards / PrescriptionDoctorCard',
  component: PrescriptionDoctorCardComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PrescriptionDoctorCardComponent>;

const Template: ComponentStory<typeof PrescriptionDoctorCardComponent> = (
  args
) => <PrescriptionDoctorCardComponent {...args} />;

export const PrescriptionDoctorCard = Template.bind({});
PrescriptionDoctorCard.args = defaultProps;
