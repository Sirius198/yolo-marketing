import React from 'react';

// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import BarChart from 'src/template/components/charts/BarChart';

// Custom components
import Card from 'src/template/components/card/Card';
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from 'src/lib/variables/charts';

// Assets
import { RiArrowUpSFill } from 'react-icons/ri';

export type DailyTrafficProps = { [x: string]: any };
const defaultProps: DailyTrafficProps = {};

export default function DailyTraffic(props: DailyTrafficProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card alignItems="center" flexDirection="column" w="100%" {...rest}>
      <Flex
        justify="space-between"
        alignItems="start"
        px="10px"
        pt="5px"
        w={'100%'}
      >
        <Flex flexDirection="column" alignItems="start" me="20px">
          <Flex w="100%">
            <Text
              color="secondaryGray.600"
              me="auto"
              fontSize="sm"
              fontWeight="500"
            >
              Daily Traffic
            </Text>
          </Flex>

          <Flex alignItems="end">
            <Text
              color={textColor}
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              2.579
            </Text>
            <Text
              ms="6px"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Visitors
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Icon as={RiArrowUpSFill} color="green.500" />
          <Text color="green.500" fontSize="sm" fontWeight="700">
            +2.45%
          </Text>
        </Flex>
      </Flex>
      <Box h="240px" mt="auto" w={'100%'}>
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
  );
}

DailyTraffic.defaultProps = defaultProps;
