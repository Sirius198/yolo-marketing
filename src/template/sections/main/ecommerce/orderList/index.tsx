// Chakra imports
import { Flex } from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';
import React from 'react';
import SearchTableOrders from './components/SearchTableOrders';
import { columnsDataOrders } from './variable/columnsDataOrders';
import tableDataOrders from './variable/tableDataOrders.json';

export type DefaultProps = {};

export default function SearchUser() {
  return (
    <Flex flexDirection="column" pt={{ sm: '125px', lg: '75px' }}>
      <Card px="0px">
        <SearchTableOrders
          tableData={tableDataOrders}
          columnsData={columnsDataOrders}
        />
      </Card>
    </Flex>
  );
}
