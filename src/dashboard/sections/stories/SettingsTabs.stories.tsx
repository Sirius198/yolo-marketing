import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Center } from '@chakra-ui/react';

import SettingsTabsComponent, { defaultProps } from '../SettingsTabs';

export default {
  title: 'Dashboard / Sections / SettingsTabs',
  component: SettingsTabsComponent,
  decorators: [
    (Story: any) => (
      <Center mt="40px" shadow="sm" p="12">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof SettingsTabsComponent>;

const Template: ComponentStory<typeof SettingsTabsComponent> = (args) => (
  <SettingsTabsComponent {...args} />
);

export const SettingsTabs = Template.bind({});
SettingsTabs.args = defaultProps;
