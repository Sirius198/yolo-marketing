import React from 'react';

// Chakra imports
import {
  Flex,
  Button,
  Text,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';

export type ButtonActionProps = {
  date: string;
  name: string;
  action: () => void | any;
  actionName: string;
  sum: string | number;
  icon?: JSX.Element;
  flexProps?: FlexProps;
} & FlexProps;

export const defaultProps: ButtonActionProps = {
  name: 'Basic Action',
  date: 'March 20th, 2022',
  actionName: 'Add',
  sum: '24',
  action: () => {},
};

export default function ButtonAction(props: ButtonActionProps) {
  const {
    date,
    sum,
    icon,
    name,
    action,
    actionName,
    flexProps = {},
  } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      {...flexProps}
    >
      <Flex direction="column" align="start" me="auto">
        <Text color={textColor} fontSize="md" me="6px" fontWeight="700">
          {date}
        </Text>
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          {name}
        </Text>
      </Flex>
      <Text
        ms="auto"
        color={textColor}
        fontSize="sm"
        me="14px"
        fontWeight="700"
      >
        {sum}
      </Text>
      <Button
        variant="outline"
        onClick={action}
        fontSize="sm"
        fontWeight="700"
        size="sm"
        colorScheme="teal"
      >
        {actionName}
      </Button>
    </Flex>
  );
}

ButtonAction.defaultProps = defaultProps;
