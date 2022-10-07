import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export interface BMIBarProps {
  /** Value from 0 - 100 indicating where the bar highlight starts */
  highlightStart: number;

  /** Value from 0 - 100 indicating where the bar highlight ends */
  highlightEnd: number;

  /** Value from 0 - 100 indicating where chevron should be */
  chevronPosition: number;

  /** String displayed below bmi bar */
  bmiString: string;
}

export const defaultProps: BMIBarProps = {
  highlightStart: 35,
  highlightEnd: 65,
  chevronPosition: 80,
  bmiString: 'Normal (BMI: 35)',
};

export default function BMIBar({
  highlightStart,
  highlightEnd,
  chevronPosition,
  bmiString,
}: BMIBarProps) {
  const validHighlight = highlightEnd > highlightStart;
  return (
    <Box width="100%">
      <ChevronDownIcon
        ml={`${chevronPosition}%`}
        w={6}
        h={6}
        color="dashboard.tealMain"
      />
      <Box
        height="5px"
        width="100%"
        borderRadius="45px"
        bgColor="teal.50"
        position="relative"
      >
        {validHighlight ? (
          <Box
            ml={`${highlightStart}%`}
            width={`calc(${highlightEnd}% - ${highlightStart}%)`}
            position="absolute"
            borderRadius="45px"
            height="5px"
            bgColor="dashboard.tealMain"
          />
        ) : null}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pt="11px"
      >
        <Text fontSize="md" color="dashboard.textSecondary">
          Under weight
        </Text>
        <Text fontSize="md" color="dashboard.tealText">
          {bmiString}
        </Text>
        <Text fontSize="md" color="dashboard.textSecondary">
          Over weight
        </Text>
      </Box>
    </Box>
  );
}

BMIBar.defaultProps = defaultProps;
