import React from 'react';

// Chakra imports
import { Flex, Text, Icon, useColorModeValue } from '@chakra-ui/react';

// Assets
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import {
  lineChartDataMiniArea2,
  lineChartOptionsMiniArea2,
} from 'src/lib/variables/charts';
import LineChart from 'src/template/components/charts/LineAreaChart';

export type StockProps = {
  sum: any;
  icon?: any;
  name: any;
  chart: any;
  growth: any;
  [x: string]: any;
};

const defaultProps: StockProps = {
  name: 'TSLA',
  sum: '3,485.9',
  growth: '-1.51%',
  chart: (
    <LineChart
      chartData={lineChartDataMiniArea2}
      chartOptions={lineChartOptionsMiniArea2}
    />
  ),
};

export default function Stock(props: StockProps) {
  const { sum, icon, name, chart, growth, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      maxH="48px"
      overflow="hidden"
      {...rest}
    >
      <Flex flexDirection="column" alignItems="start" me="auto">
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          {name}
        </Text>
        <Flex alignItems="center">
          <Text color={textColor} fontSize="md" me="6px" fontWeight="700">
            {sum}
          </Text>
          <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
            EUR
          </Text>
        </Flex>
      </Flex>
      <Flex width="120px" ms="auto" mt="30px">
        {chart}
      </Flex>
      <Flex alignItems="center">
        {growth[0] === '-' ? (
          <Icon as={RiArrowDownSFill} color="red.500" />
        ) : (
          <Icon as={RiArrowUpSFill} color="green.500" />
        )}

        <Text
          color={growth[0] === '-' ? 'red.500' : 'green.500'}
          fontSize="sm"
          ms="10px"
          fontWeight="700"
        >
          {growth}
        </Text>
      </Flex>
    </Flex>
  );
}

Stock.defaultProps = defaultProps;
