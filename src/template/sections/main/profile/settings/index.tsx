// Chakra imports
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
// Assets

import React from 'react';
// Custom components
import Info from './components/Info';
import Password from './components/Password';
import Profile from './components/Profile';
import Socials from './components/Socials';

export type DefaultProps = {};

export default function Settings() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, lg: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {/* Column Left */}
        <Flex flexDirection="column">
          <Profile
            name="Vlad Mihalache"
            avatar={'assets/images/crm/vbz.png'}
            banner={'assets/images/auth/banner.png'}
          />
          <Info />
        </Flex>
        {/* Column Right */}
        <Flex flexDirection="column">
          <Socials />
          <Password />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
