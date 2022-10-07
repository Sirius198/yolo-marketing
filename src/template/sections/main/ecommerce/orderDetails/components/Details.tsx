// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import { NextChakraLink } from 'src/template/components/links/links';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';
import React from 'react';

export type DetailsProps = { [x: string]: any };
const defaultProps: DetailsProps = {};

export default function YourOrderSteps(props: DetailsProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  return (
    <Card
      // flexDirection="column"
      w="100%"
      p="35px"
      flexDirection={{ base: 'column', md: 'row' }}
      {...rest}
    >
      <Flex flexDirection="column" me={{ base: '0px', md: '100px' }}>
        <Text
          color="secondaryGray.600"
          fontSize="md"
          fontWeight="400"
          lineHeight="26px"
        >
          Customer Details:
        </Text>
        <Text
          color={textColor}
          fontSize="xl"
          fontWeight="700"
          lineHeight="26px"
        >
          Anthony Petterson
        </Text>
        <Text
          color="secondaryGray.600"
          fontSize="md"
          fontWeight="400"
          lineHeight="26px"
        >
          37 Avenue, Boggstown,
          <br />
          Indiana, United States 84219
        </Text>
      </Flex>
      <Flex flexDirection="column" mt={{ base: '20px', md: '0px' }}>
        <Text
          color="secondaryGray.600"
          fontSize="md"
          fontWeight="400"
          lineHeight="26px"
        >
          +1 932 769400421
        </Text>
        <NextChakraLink
          color={brandColor}
          href="#"
          textDecoration="underline"
          fontSize="md"
          fontWeight="500"
          lineHeight="26px"
        >
          anthony.petterson@gmail.com
        </NextChakraLink>
        <Text
          color="secondaryGray.600"
          fontSize="md"
          fontWeight="400"
          lineHeight="26px"
        >
          By Credit Card
        </Text>
        <Text
          color="secondaryGray.600"
          fontSize="md"
          fontWeight="400"
          lineHeight="26px"
        >
          July 27, 2022 at 09:44 AM
        </Text>
      </Flex>
      <NextChakraResponsiveImage
        alt=""
        alignSelf="center"
        ms={{ base: '0px', md: 'auto' }}
        mt={{ base: '20px', md: '0px' }}
        src={'assets/images/ecommerce/Code-128.png'}
        w={111}
        h={111}
      />
    </Card>
  );
}

YourOrderSteps.defaultProps = defaultProps;
