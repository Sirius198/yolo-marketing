import React from 'react';

// Chakra imports
import {
  Flex,
  Button,
  Text,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';

export interface SetUpProps extends FlexProps {
  value?: string;
  name?: string;
  action?: () => any;
  actionName?: string;
}

export const defaultProps: SetUpProps = {
  value: 'Some value',
  name: 'The Setup',
  actionName: 'Go there',
  action: () => {},
};

export default function SetUp(props: SetUpProps) {
  const { value, name, action, actionName, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Flex
      justifyContent="space-between"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      w="100%"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="md"
        me="6px"
        fontWeight="700"
        mb={{ base: '10px', md: '0px' }}
      >
        {name}
      </Text>
      <Flex
        align="center"
        flexDirection={{ base: 'column', md: 'row' }}
        mb={{ base: '20px', md: '0px' }}
      >
        <Text
          ms="auto"
          mb={{ base: '10px', md: '0px' }}
          color="secondaryGray.600"
          fontSize="md"
          me={{ base: '10px', md: '30px' }}
          fontWeight="500"
        >
          {value}
        </Text>
        <Button
          variant="setup"
          px="24px"
          onClick={action}
          fontSize="md"
          fontWeight="500"
        >
          {actionName}
        </Button>
      </Flex>
    </Flex>
  );
}

SetUp.defaultProps = defaultProps;
