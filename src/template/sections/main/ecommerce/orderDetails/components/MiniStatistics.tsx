import React from 'react';

// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import { RiArrowUpSFill } from 'react-icons/ri';
import { MdFileCopy } from 'react-icons/md';
import IconBox from 'src/template/components/icons/IconBox';

export type MiniStatisticsProps = {
  illustration: any;
  focused?: boolean;
  title: any;
  value: any;
  detail: any;
  [x: string]: any;
};
const defaultProps: MiniStatisticsProps = {
  title: 'Total Projects',
  value: '670',
  detail: (
    <Flex align="center">
      <Icon as={RiArrowUpSFill} color="green.500" />
      <Text color="green.500" fontSize="sm" mx="4px" fontWeight="700">
        +27%
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
      bg={'secondaryGray.300'}
      icon={<Icon color={'brand.500'} as={MdFileCopy} w="28px" h="28px" />}
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
