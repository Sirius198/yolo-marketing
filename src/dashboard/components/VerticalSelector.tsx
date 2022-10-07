import React from 'react';
import { Box, Select } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export interface VerticalSelectorOtpion {
  /** List values */
  value: string | number;
  /** Associated list value label (to be displayed to users) */
  label: string;
}

export interface VerticalSelectorProps {
  /** List of options */
  options: Array<VerticalSelectorOtpion>;
  /** The currently selected option */
  selectedValue: VerticalSelectorOtpion['value'];
}

export const defaultProps: VerticalSelectorProps = {
  options: [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ],
  selectedValue: 'opt1',
};

export default function VerticalSelector({
  options = [],
  selectedValue,
}: VerticalSelectorProps) {
  return (
    <Box
      width="100%"
      sx={{
        '.chakra-select__icon-wrapper': {
          mr: '16px',
        },
      }}
    >
      <Select
        placeholder="Select option"
        value={selectedValue}
        icon={<ChevronDownIcon />}
        iconColor="dashboard.tealMain"
        iconSize="32px"
        height="64px"
        borderRadius="131px"
        style={{ paddingLeft: '32px' }}
        fontSize="xl"
      >
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </Select>
    </Box>
  );
}

VerticalSelector.defaultProps = defaultProps;
