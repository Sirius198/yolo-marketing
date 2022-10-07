import React from 'react';

// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import IconBox from '../icons/IconBox';
import { RiNetflixFill } from 'react-icons/ri';

export type TransactionProps = {
  date: string;
  sum: string;
  icon: JSX.Element;
  name: string;
  [x: string]: any;
};

const defaultProps: TransactionProps = {
  name: 'Netflix',
  date: '12 September 2022',
  sum: '-$34.90',
  icon: <Icon as={RiNetflixFill} color={'red'} w="20px" h="18px" />,
};

export default function Transaction(props: TransactionProps) {
  const { date, sum, icon, name, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconBoxBg = useColorModeValue(
    'secondaryGray.300',
    'brandDark.700'
  );
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" {...rest}>
      <IconBox h="42px" w="42px" bg={iconBoxBg} me="20px" icon={icon} />
      <Flex direction="column" align="start" me="auto">
        <Text color={textColor} fontSize="md" me="6px" fontWeight="700">
          {name}
        </Text>
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          {date}
        </Text>
      </Flex>
      <Text
        ms="auto"
        color={textColor}
        fontSize="sm"
        me="6px"
        fontWeight="700"
      >
        {sum}
      </Text>
    </Flex>
  );
}

Transaction.defaultProps = defaultProps;
