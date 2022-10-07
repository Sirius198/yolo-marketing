// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import LineAreaChart from 'src/template/components/charts/LineAreaChart';

import {
  MdOutlineBrightness2,
  MdOutlineWbSunny,
  MdBluetooth,
} from 'react-icons/md';
import {
  lineChartDataAreaCarInterface,
  lineChartOptionsAreaCarInterface,
} from 'src/lib/variables/charts';
import React from 'react';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type ConsumptionProps = { [x: string]: any };
const defaultProps: ConsumptionProps = {};

export default function Consumption(props: ConsumptionProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColorSecondary = useColorModeValue(
    'secondaryGray.600',
    'white'
  );
  const elipseMode = useColorModeValue(
    'https://i.ibb.co/Y3nrFfd/elipse-light.png',
    'https://i.ibb.co/g66yJnm/Ellipse-94.png'
  );
  return (
    <Card alignItems="center" flexDirection="column" w="100%" {...rest}>
      <Flex
        alignItems="center"
        w="100%"
        px="15px"
        py="10px"
        justifyContent={'space-between'}
      >
        <NextChakraResponsiveImage
          alt=""
          src={'assets/images/dashboards/Battery.png'}
          w={'61px'}
          h={'21px'}
        />
        <Text
          ms="auto"
          color={textColorSecondary}
          fontSize="md"
          fontWeight="500"
          lineHeight="100%"
        >
          657 Miles
        </Text>
      </Flex>

      <Flex h="240px" alignItems="center">
        <Box
          me={{ base: '20px', md: '50px', '2xl': '20px', '3xl': '50px' }}
        >
          <Flex mb="6px">
            <Switch colorScheme="brandScheme" />
            <Icon
              h="20px"
              w="20px"
              as={MdOutlineWbSunny}
              color={textColorSecondary}
            />
          </Flex>
          <Flex>
            <Switch colorScheme="brandScheme" />
            <Icon
              h="20px"
              w="20px"
              as={MdOutlineBrightness2}
              color={textColorSecondary}
            />
          </Flex>
        </Box>
        <Box
          me={{ base: '0px', md: '50px', '2xl': '0px', '3xl': '50px' }}
          bgImage={elipseMode}
          h="70%"
          w="100%"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <LineAreaChart
            chartData={lineChartDataAreaCarInterface}
            chartOptions={lineChartOptionsAreaCarInterface}
          />
        </Box>
        <Flex>
          <Icon
            me="6px"
            h="20px"
            w="20px"
            as={MdBluetooth}
            color={textColorSecondary}
          />
          <Text
            color={textColorSecondary}
            fontSize="md"
            textAlign="start"
            fontWeight="500"
            lineHeight="100%"
          >
            Esthera’s
            <br /> Iphone
          </Text>
        </Flex>
      </Flex>
      <Text
        mt="-40px"
        mx="auto"
        color={textColorSecondary}
        fontSize="lg"
        fontWeight="500"
        lineHeight="100%"
      >
        Hello, how can I help?
      </Text>
    </Card>
  );
}

Consumption.defaultProps = defaultProps;
