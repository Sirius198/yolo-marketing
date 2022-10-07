import React from 'react';
import { Box, Text, Switch, VStack } from '@chakra-ui/react';

export interface SwitchListProps {
  /**
   * Section title
   */
  title: string;
  /** Fired when any switch is clicked */
  onChange: (uid: string) => void;
  /** List of items to render, uid sent to onClick, label displayed to user */
  items: Array<{ uid: string; label: string }>;
  /** List of items that have been checked/switched on */
  checkedItems: Array<string>;
}

export const defaultProps: SwitchListProps = {
  title: 'Section title',
  onChange: console.log,
  items: [
    { uid: 'uid-1', label: 'Item 1' },
    { uid: 'uid-2', label: 'Item 2' },
    { uid: 'uid-3', label: 'Item 3' },
  ],
  checkedItems: ['uid-2'],
};

export default function SwitchList({
  title,
  items = [],
  checkedItems = [],
  onChange,
}: SwitchListProps) {
  return (
    <Box width="100%">
      <Text fontSize="xl" color="dashboard.secondaryText" mb="27px">
        {title}
      </Text>
      <VStack spacing="33px" align="stretch">
        {items.map(({ uid, label }) => {
          return (
            <Box
              key={uid}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <label
                htmlFor={uid}
                className="text-xl font-normal text-dashboard-primaryText"
              >
                {label}
              </label>
              <Switch
                isChecked={checkedItems.some((item) => item === uid)}
                id={uid}
                onChange={() => onChange(uid)}
                variant="dashboard"
              />
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
}

SwitchList.defaultProps = defaultProps;
