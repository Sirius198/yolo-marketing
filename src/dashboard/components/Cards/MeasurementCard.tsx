import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export interface MeasurementCardProps {
  /** Measurement name for example Height or Weight */
  name: string;

  /** Measurement value for example 5ft 9in or 70kg */
  value: string;
}

export const defaultProps: MeasurementCardProps = {
  name: 'Height',
  value: '5ft 9in',
};

export default function MeasurementCard({
  name,
  value,
}: MeasurementCardProps) {
  return (
    <Box
      w="197px"
      h="87px"
      p="17px 30px 26px 25px"
      display="flex"
      bgColor="teal.50"
      justifyContent="space-between"
    >
      <Text
        fontSize="md"
        fontWeight="normal"
        color="dashboard.secondaryText"
      >
        {name}
      </Text>
      <Text
        color="dashboard.tealText"
        fontSize="2xl"
        fontWeight="medium"
        alignSelf="flex-end"
      >
        {value}
      </Text>
    </Box>
  );
}

MeasurementCard.defaultProps = defaultProps;
