import React from 'react';

// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import { RiArrowUpSFill } from 'react-icons/ri';
import IconBox from 'src/template/components/icons/IconBox';
import { MdOutlineBarChart } from 'react-icons/md';

export type MiniStatisticsProps = {
  focused?: boolean;
  title: string;
  value: string;
  illustration: any;
  detail: any;
  [x: string]: any;
};

const defaultProps: MiniStatisticsProps = {
  focused: false,
  title: 'Total Income',
  value: '$4.347',
  detail: (
    <Flex align="center">
      <Icon as={RiArrowUpSFill} color="green.500" />
      <Text color="red.500" fontSize="sm" mx="3px" fontWeight="500">
        +20%
      </Text>
      <Text color="red.500" fontSize="sm" fontWeight="500">
        Since last month
      </Text>
    </Flex>
  ),
  illustration: (
    <IconBox
      w="80px"
      h="80px"
      bg="linear-gradient(290.56deg, #868CFF -18.35%, #4318FF 60.45%)"
      icon={
        <Icon as={MdOutlineBarChart} w="38px" h="38px" color="white" />
      }
    />
  ),
};

export default function Statistics(props: MiniStatisticsProps) {
  const { illustration, focused, title, value, detail, ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.500'
  );
  return (
    <Card flexDirection="row" w="100%" p="25px" {...rest}>
      <Flex alignItems="center" justify="space-between" w={'100%'}>
        <Flex flexDirection="column">
          <Text
            color={focused ? 'secondaryGray.400' : textColorSecondary}
            fontSize="sm"
            fontWeight="500"
            mb="10px"
            lineHeight="100%"
          >
            {title}
          </Text>
          <Text
            color={focused ? 'white' : textColor}
            fontSize="2xl"
            fontWeight="700"
            lineHeight="100%"
            mb="8px"
          >
            {value}
          </Text>
          {detail}
        </Flex>
        {illustration}
      </Flex>
    </Card>
  );
}

Statistics.defaultProps = defaultProps;
