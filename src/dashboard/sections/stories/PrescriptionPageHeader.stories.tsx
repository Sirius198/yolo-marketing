import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import PrescriptionPageHeaderComponent, {
  defaultProps,
} from '../PrescriptionPageHeader';

export default {
  title: 'Dashboard / Sections / PrescriptionPageHeader',
  component: PrescriptionPageHeaderComponent,
  argTypes: {
    onChevronClick: { action: 'Chevron clicked' },
    downloadOnClick: { action: 'Download clicked' },
  },
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof PrescriptionPageHeaderComponent>;

const Template: ComponentStory<typeof PrescriptionPageHeaderComponent> = (
  args
) => <PrescriptionPageHeaderComponent {...args} />;

const { onChevronClick, downloadOnClick, ...rest } = defaultProps;
export const PrescriptionPageHeader = Template.bind({});
PrescriptionPageHeader.args = rest;
