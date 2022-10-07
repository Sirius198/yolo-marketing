// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';
// Custom components
import { MdPieChart } from 'react-icons/md';
import BarChart from 'src/template/components/charts/BarChart';
import React from 'react';
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from 'src/lib/variables/charts';

export type ConsumptionProps = { [x: string]: any };
const defaultProps: ConsumptionProps = {};

export default function Consumption(props: ConsumptionProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgButton = useColorModeValue(
    'secondaryGray.300',
    'whiteAlpha.100'
  );
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' }
  );
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.100' }
  );
  return (
    <Card alignItems="center" flexDirection="column" w="100%" {...rest}>
      <Flex alignItems="center" w="100%" px="15px" py="10px">
        <Text
          me="auto"
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Consumption per Day
        </Text>
        <Button
          alignItems="center"
          justifyContent="center"
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
          {...rest}
        >
          <Icon as={MdPieChart} color={iconColor} w="20px" h="20px" />
        </Button>
      </Flex>

      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
}

Consumption.defaultProps = defaultProps;
