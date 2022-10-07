import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';

export interface SettingsTabsProps {
  /**
   * List of Chakra Tab components to render
   */
  tabs: Array<React.ReactNode>;
  /** List of Chakra Tab panels to render */
  tabPanels: Array<React.ReactNode>;
}

export const defaultProps: SettingsTabsProps = {
  tabs: [
    <Tab key="notifications">Notifications</Tab>,
    <Tab key="payment">Payment Methods</Tab>,
    <Tab key="support">Support</Tab>,
  ],
  tabPanels: [
    <TabPanel key="one">
      <p>one!</p>
    </TabPanel>,
    <TabPanel key="two">
      <p>two!</p>
    </TabPanel>,
    <TabPanel key="three">
      <p>three!</p>
    </TabPanel>,
  ],
};

export default function SettingsTabs({
  tabs,
  tabPanels,
}: SettingsTabsProps) {
  return (
    <Tabs variant="soft-rounded" colorScheme="dashboardTabs" width="100%">
      <TabList
        bgColor="dashboard.lightTeal"
        width="100%"
        height="68px"
        borderRadius="38.5px"
        justifyContent="space-around"
        p="14px"
        fontWeight="medium"
        fontSize="xl"
        color="dashboard.primaryText"
      >
        {tabs.map((tab) => {
          return tab;
        })}
      </TabList>
      <TabPanels>
        {tabPanels.map((panel) => {
          return panel;
        })}
      </TabPanels>
    </Tabs>
  );
}

SettingsTabs.defaultProps = defaultProps;
