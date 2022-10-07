import React from 'react';

// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { YoloHealthLogo } from '../../icons/Icons';
import { HSeparator } from '../../separator/Separator';

export type BrandProps = {};

export function SidebarBrand() {
  //   Chakra color mode
  // let logoColor = useColorModeValue('brand.500', 'white');
  let logoColor = useColorModeValue('#00C6B2', 'white');

  return (
    <Flex align="center" direction="column">
      <YoloHealthLogo h="26px" w="175px" my="50px" color={logoColor} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
