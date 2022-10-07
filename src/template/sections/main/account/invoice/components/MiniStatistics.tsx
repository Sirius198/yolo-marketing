import React from 'react';

// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import { RiArrowUpSFill } from 'react-icons/ri';
import IconBox from 'src/template/components/icons/IconBox';
import { MdPerson } from 'react-icons/md';

export type MiniStatisticsProps = {
  illustration: any;
  focused?: boolean;
  title: string;
  value: string;
  detail: any;
  [x: string]: any;
};
const defaultProps: MiniStatisticsProps = {
  title: 'Activity',
  value: '1.920',
  detail: (
    <Flex align="center">
      <Icon as={RiArrowUpSFill} color="green.500" />
      <Text color="green.500" fontSize="sm" mx="4px" fontWeight="700">
        +16%
      </Text>
      <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
        Since last month
      </Text>
    </Flex>
  ),
  illustration: (
    <IconBox
      w="80px"
      h="80px"
      bg="navy.700"
      icon={<Icon color="white" as={MdPerson} w="38px" h="38px" />}
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
      <Flex alignItems="center" justify="space-between">
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
