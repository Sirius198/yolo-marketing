import React from 'react';

// Chakra imports
import {
  Flex,
  FlexProps,
  Text,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';

import { MdCheckCircle, MdComment, MdPersonAddAlt1 } from 'react-icons/md';

// Custom components
import IconBox from '../icons/IconBox';

export interface TransactionProps extends FlexProps {
  date?: string;
  sum?: string;
  name?: string;
  icon: JSX.Element;
}

export const defaultProps: TransactionProps = {
  date: 'March 01 2022',
  sum: '52',
  name: 'Go there',
  icon: <Icon w="28px" h="28px" as={MdPersonAddAlt1} />,
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
        <Text color={textColor} fontSize="sm" me="6px" fontWeight="700">
          {name}
        </Text>
        <Text color="secondaryGray.600" fontSize="xs" fontWeight="500">
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
