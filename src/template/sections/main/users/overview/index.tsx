// Chakra imports
import { Flex } from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';
import React from 'react';
import SearchTableUsers from './components/SearchTableUsersOverivew';
import { columnsDataUsersOverview } from './variables/columnsDataUsersOverview';
import tableDataUsersOverview from './variables/tableDataUsersOverview.json';

export type DefaultProps = {};

export default function UsersOverview() {
  return (
    <Flex flexDirection="column" pt={{ sm: '125px', lg: '75px' }}>
      <Card px="0px">
        <SearchTableUsers
          tableData={tableDataUsersOverview}
          columnsData={columnsDataUsersOverview}
        />
      </Card>
    </Flex>
  );
}
