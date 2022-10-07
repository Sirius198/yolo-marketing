// Chakra imports
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import React from 'react';
import Delete from './components/Delete';
import Details from './components/Details';
import Dropzone from './components/DropzoneCard';
import Info from './components/Info';
import Socials from './components/Socials';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type DefaultProps = {};

export default function Settings() {
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        columns={{ sm: 1, xl: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {/* Column Left */}
        <Flex flexDirection="column">
          <Card mb="20px">
            <NextChakraResponsiveImage
              alt=""
              borderRadius="20px"
              h={{ base: 'auto', xl: '396px', '2xl': 'auto' }}
              src={'assets/images/ecommerce/ChairDef.png'}
            />
          </Card>
          <Info />
        </Flex>
        {/* Column Right */}
        <Flex flexDirection="column">
          <Dropzone mb="20px" />
          <Socials mt="20px" />
        </Flex>
      </SimpleGrid>
      <Details />
      <Delete />
    </Box>
  );
}
