// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import LineAreaChart from 'src/template/components/charts/LineAreaChart';
// Assets
import { RiArrowUpSFill } from 'react-icons/ri';
import {
  lineChartDataAreaEventsCalendar,
  lineChartOptionsAreaEventsCalendar,
} from 'src/lib/variables/charts';
import React from 'react';

export type EventsProps = { [x: string]: any };
const defaultProps: EventsProps = {};

export default function Consumption(props: EventsProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  return (
    <Card
      alignItems="center"
      p="30px"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="2xl"
        textAlign="start"
        fontWeight="700"
        lineHeight="100%"
        mb="5px"
        w={'100%'}
      >
        Completed Events
      </Text>
      <Flex alignItems="center" w={'100%'}>
        <Icon as={RiArrowUpSFill} color="green.500" me="2px" />
        <Text color="green.500" fontSize="sm" fontWeight="700" me="6px">
          +16%
        </Text>
        <Text color={textColorSecondary} fontSize="sm" fontWeight="500">
          Since last month
        </Text>
      </Flex>
      <Box w={'100%'}>
        <LineAreaChart
          chartData={lineChartDataAreaEventsCalendar}
          chartOptions={lineChartOptionsAreaEventsCalendar}
        />
      </Box>
    </Card>
  );
}

Consumption.defaultProps = defaultProps;
