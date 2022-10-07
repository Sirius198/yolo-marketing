import React from 'react';

// Chakra imports
import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { VSeparator } from 'src/template/components/separator/Separator';

import Balance from './components/Balance';
import DailyTraffic from './components/DailyTraffic';
import MostVisitedTable from './components/MostVisitedTable';
import OverallRevenue from './components/OverallRevenue';
import ProfitEstimation from './components/ProfitEstimation';
import ProjectStatus from './components/ProjectStatus';
import YourCard from './components/YourCard';
import YourTransfers from './components/YourTransfers';
import { tableColumnsMostVisited } from './variables/tableColumnsMostVisited';
import tableDataMostVisited from './variables/tableDataMostVisited.json';

export type DefaultProps = {};

export default function Default() {
  // Chakra Color Mode
  const paleGray = useColorModeValue(
    'secondaryGray.400',
    'whiteAlpha.100'
  );
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Flex flexDirection="column" width="stretch">
        <Grid
          mb="20px"
          gridTemplateColumns={{
            base: 'repeat(2, 1fr)',
            '2xl': '720fr 350fr',
          }}
          gap="20px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex
            gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
          >
            <OverallRevenue />
          </Flex>
          <Flex
            gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}
          >
            <Balance />
          </Flex>
        </Grid>
        <Grid
          gap="20px"
          gridTemplateColumns={{
            md: 'repeat(2, 1fr)',
            '2xl': 'repeat(3, 1fr)',
          }}
          gridTemplateRows={{
            md: 'repeat(2, 1fr)',
            '2xl': '1fr',
          }}
          mb="20px"
        >
          <Flex gridArea={{ md: '1 / 1 / 2 / 2', '2xl': '1 / 1 / 2 / 2' }}>
            <DailyTraffic />
          </Flex>
          <Flex gridArea={{ md: '1 / 2 / 2 / 3', '2xl': '1 / 2 / 2 / 3' }}>
            <ProjectStatus />
          </Flex>
          <Flex
            gridArea={{ md: ' 2 / 1 / 3 / 3', '2xl': '1 / 3 / 2 / 4' }}
          >
            <ProfitEstimation />
          </Flex>
        </Grid>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            '2xl': '350fr 720fr',
          }}
          gap="20px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex
            gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
          >
            <YourTransfers />
          </Flex>
          <Flex
            gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}
          >
            <MostVisitedTable
              tableData={tableDataMostVisited}
              columnsData={tableColumnsMostVisited}
            />
          </Flex>
        </Grid>
      </Flex>
      <VSeparator
        mx="20px"
        bg={paleGray}
        display={{ base: 'none', xl: 'flex' }}
      />
      <YourCard
        maxW={{ base: '100%', xl: '400px' }}
        maxH={{ base: '100%', xl: '1170px', '2xl': '100%' }}
      />
    </Flex>
  );
}
