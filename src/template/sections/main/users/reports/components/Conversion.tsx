// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import CircularProgress from 'src/template/components/charts/CircularProgress';
import { VSeparator } from 'src/template/components/separator/Separator';
import React from 'react';

export type ConversionProps = { [x: string]: any };
const defaultProps: ConversionProps = {};

export default function Conversion(props: ConversionProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardColor = useColorModeValue('white', 'brandDark.700');
  return (
    <Card
      p="20px"
      py="30px"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="lg"
        fontWeight="700"
        mb="10px"
        mx="auto"
      >
        User Conversion
      </Text>
      <Text
        color="secondaryGray.600"
        fontSize="sm"
        fontWeight="500"
        maxW="250px"
        mx="auto"
        mb="10px"
      >
        Discover your stats, and learn more about your business users
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        px="10px"
        mb="8px"
      ></Flex>
      <Box w="125px" mx="auto" mb="10px">
        <CircularProgress title="Conversion" percentage={66} />
      </Box>
      <Card
        bg={cardColor}
        flexDirection="row"
        w="max-content"
        p="15px"
        px="20px"
        mt="auto"
        mx="auto"
      >
        <Flex flexDirection="column" py="5px">
          <Text
            fontSize="xs"
            color="secondaryGray.600"
            fontWeight="700"
            mb="5px"
          >
            Est. Users
          </Text>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            8540
          </Text>
        </Flex>
        <VSeparator ms="70px" me="20px" />
        <Flex flexDirection="column" py="5px" me="10px">
          <Text
            fontSize="xs"
            color="secondaryGray.600"
            fontWeight="700"
            mb="5px"
          >
            Est. Purchases
          </Text>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            $3.984
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}

Conversion.defaultProps = defaultProps;
