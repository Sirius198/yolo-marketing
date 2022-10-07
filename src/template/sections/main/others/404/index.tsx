// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Assets
import { NextChakraLink } from 'src/template/components/links/links';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';
import React from 'react';

export type DefaultProps = {};

function Alerts() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      pt={{ sm: '125px', lg: '75px' }}
    >
      <NextChakraResponsiveImage
        alt=""
        src={'assets/images/others/error.png'}
        w="400px"
        maxW="90%"
        mt={{ base: '4vh', lg: '20vh' }}
        mb="10px"
        style={{ position: 'inherit' }}
      />
      <Text
        color={textColor}
        fontSize={{ base: '40px', lg: '46px' }}
        fontWeight="700"
        mb="30px"
        textAlign={{ base: 'center', md: 'start' }}
      >
        Ah, dang. We didn&#39;t find that page.
      </Text>
      <Flex alignItems="center" direction={{ base: 'column', md: 'row' }}>
        <Text
          color={textColor}
          fontWeight="500"
          fontSize={{ base: 'md', md: 'lg' }}
          me="4px"
        >
          Maybe it’s best you start back at our home page...
        </Text>
        <NextChakraLink
          color={brandColor}
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="500"
          href="/"
        >
          Return at home here.
        </NextChakraLink>
      </Flex>
    </Flex>
  );
}

export default Alerts;
