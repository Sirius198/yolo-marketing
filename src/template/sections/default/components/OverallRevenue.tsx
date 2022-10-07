import React from 'react';

// Chakra imports
import {
  Flex,
  Box,
  Icon,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import LineChart from 'src/template/components/charts/LineChart';

// Custom components
import Card from 'src/template/components/card/Card';
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
} from 'src/lib/variables/charts';

// Assets
import { RiArrowUpSFill } from 'react-icons/ri';

export type OverallRevenueProps = { [x: string]: any };
const defaultProps: OverallRevenueProps = {};

export default function OverallRevenue(props: OverallRevenueProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      mb={{ base: '20px', lg: '0px' }}
      {...rest}
    >
      <Flex justify="space-between" px="20px" pt="5px" w={'100%'}>
        <Flex alignItems="center">
          <Flex flexDirection="column" me="20px">
            <Text
              color={textColor}
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              $37.5K
            </Text>
            <Text
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
              mt="4px"
            >
              Overall Revenue
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={RiArrowUpSFill} color="green.500" me="2px" />
            <Text color="green.500" fontSize="sm" fontWeight="700">
              +2.45%
            </Text>
          </Flex>
        </Flex>
        <Select
          fontSize="sm"
          variant="subtle"
          defaultValue="monthly"
          width="unset"
          fontWeight="700"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </Flex>
      <Box minH="260px" mt="auto" w={'100%'}>
        <LineChart
          chartData={lineChartDataOverallRevenue}
          chartOptions={lineChartOptionsOverallRevenue}
        />
      </Box>
    </Card>
  );
}

OverallRevenue.defaultProps = defaultProps;
