import React from 'react';
// Chakra imports
import { Flex } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import Banner from './components/Banner';
import Content from './components/Content';

export type DefaultProps = {};

export default function Invoice() {
  // Chakra Color Mode
  return (
    <Card
      mt={{ base: '130px', md: '80px', xl: '80px' }}
      maxW="920px"
      mx="auto"
    >
      <Flex flexDirection="column" width="stretch">
        <Banner />
        <Content />
      </Flex>
    </Card>
  );
}
