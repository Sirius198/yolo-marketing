// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import BarChart from 'src/template/components/charts/BarChart';
import React from 'react';
import {
  barChartDataHoursSpent,
  barChartOptionsHoursSpent,
} from 'src/lib/variables/charts';

export type HoursProps = { [x: string]: any };
const defaultProps: HoursProps = {};

export default function HoursSpent(props: HoursProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const borderColor = useColorModeValue('transparent', 'whiteAlpha.100');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card
      border="1px solid"
      borderColor={borderColor}
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Flex justify="space-between" alignItems="start" px="6px" pt="5px">
        <Flex flexDirection="column" alignItems="start" me="20px">
          <Text
            color={textColor}
            fontSize={{ base: 'lg', lg: 'md', '2xl': 'lg' }}
            fontWeight="700"
          >
            Hours Spent
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Text color={textColor} fontSize="sm" fontWeight="700">
            22 h 45 min
          </Text>
        </Flex>
      </Flex>
      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartDataHoursSpent}
          chartOptions={barChartOptionsHoursSpent}
        />
      </Box>
    </Card>
  );
}

HoursSpent.defaultProps = defaultProps;
