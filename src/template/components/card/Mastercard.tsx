import React from 'react';

// Chakra imports
import { Flex, Box, Icon, Text, Spacer } from '@chakra-ui/react';
// Custom components
import Card from './Card';

// Assets
import { RiMastercardFill } from 'react-icons/ri';

export interface MastercardProps {
  exp?: string;
  cvv?: string;
  number?: string;
}

export const defaultProps: MastercardProps = {
  exp: '2022-10-12',
  cvv: '291',
  number: '4444-4444-5555-4345',
};

export default function Mastercard(props: MastercardProps) {
  const { exp, cvv, number, ...rest } = props;

  // Chakra Color Mode
  return (
    <Card
      borderRadius="20px"
      backgroundImage="/assets/images/dashboards/Debit.png"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      boxShadow="0px 32px 41px -18px rgba(242, 134, 134, 0.4)"
      alignSelf="center"
      w={{ base: '100%', md: '60%', xl: '99%' }}
      bgPosition="10%"
      mx="auto"
      p="20px"
      {...rest}
    >
      <Flex direction="column" color="white" h="100%" w="100%">
        <Flex justify="space-between" align="center" mb="37px">
          <Text fontSize="2xl" fontWeight="bold">
            Glassy.
          </Text>
          <Icon as={RiMastercardFill} w="48px" h="auto" color="white" />
        </Flex>
        <Spacer />
        <Flex direction="column">
          <Box>
            <Text
              fontSize={{ sm: 'xl', lg: 'lg', xl: 'xl' }}
              fontWeight="bold"
            >
              {number}
            </Text>
          </Box>
          <Flex mt="14px">
            <Flex direction="column" me="34px">
              <Text fontSize="xs">VALID THRU</Text>
              <Text fontSize="sm" fontWeight="500">
                {exp}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="xs">CVV</Text>
              <Text fontSize="sm" fontWeight="500">
                {cvv}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

Mastercard.defaultProps = defaultProps;
