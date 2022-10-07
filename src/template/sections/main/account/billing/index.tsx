import React from 'react';
// Chakra imports
import { Flex, SimpleGrid } from '@chakra-ui/react';
// Custom components
import YourCard from './components/YourCard';
import YourTransactions from './components/YourTransactions';
import YourTransfers from './components/YourTransfers';
import Invoices from './components/Invoices';
import Balance from './components/Balance';
import Market from './components/Market';
import PaymentMethod from './components/PaymentMethod';

export type DefaultProps = {};

export default function Billing() {
  // Chakra Color Mode
  return (
    <Flex pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex flexDirection="column" width="stretch">
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 1, xl: 3 }}
          gap="20px"
          mb="20px"
        >
          <Flex>
            <YourCard />
          </Flex>
          <Flex flexDirection="column">
            <Balance mb="20px" />
            <PaymentMethod />
          </Flex>
          <Flex>
            <Invoices />
          </Flex>
        </SimpleGrid>
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 1, xl: 3 }}
          gap="20px"
          mb="20px"
        >
          <Flex>
            <YourTransactions />
          </Flex>
          <Flex>
            <Market />
          </Flex>
          <Flex>
            <YourTransfers />
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
