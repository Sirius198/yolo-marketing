import React from 'react';

// Chakra imports
import { Button, Box, Grid, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';

import General from './components/General';
import Light from './components/Light';
import MapCard from './components/MapCard';
import Plan from './components/Plan';
import Temperature from './components/Temperature';
import Weather from './components/Weather';
import Consumption from './components/Consumption';
import AddDevice from './components/AddDevice';

export type DefaultProps = {};

export default function Default() {
  // Chakra Color Mode
  return (
    <Grid
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      mb="20px"
      gridTemplateColumns="2.6fr 1fr"
      gap={{ base: '20px', xl: '20px' }}
      display={{ base: 'block', lg: 'grid' }}
    >
      <Box gridArea="1 / 1 / 2 / 2">
        <SimpleGrid
          columns={{ base: 1, md: 2, '2xl': 3 }}
          gap="20px"
          mb="20px"
        >
          <Card
            bgSize="cover"
            w=""
            minH={{ base: '310px', md: '100%' }}
            bgImage="/assets/images/dashboards/home.png"
          >
            <Button
              variant="no-hover"
              w="max-content"
              backdropFilter="blur(11px)"
              borderRadius="70px"
              mt="auto"
              fontSize="sm"
              bg="linear-gradient(112.83deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0) 110.84%)"
              color="white"
              fontWeight="bold"
            >
              More photos
            </Button>
          </Card>
          <Temperature />
          <Weather />
          <Plan />
          <Light />
          <General />
        </SimpleGrid>
        <Grid
          mb="20px"
          gridTemplateColumns={{ base: '1fr 1fr', xl: '2fr 1fr' }}
          gap={{ base: '20px', xl: '20px' }}
          display={{ base: 'block', lg: 'grid' }}
        >
          <Consumption />
          <AddDevice />
        </Grid>
      </Box>

      <MapCard gridArea="1 / 2 / 2 / 3" />
    </Grid>
  );
}
