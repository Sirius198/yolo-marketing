// Chakra imports
import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';
import React from 'react';

export type AddDeviceProps = {
  [x: string]: any;
};

const defaultProps: AddDeviceProps = {};

export default function AddDevice(props: AddDeviceProps) {
  const { ...rest } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card
      p={{
        base: '40px 20px',
        md: '70px 55px',
        '2xl': '50px 28px',
        '3xl': '70px 55px',
      }}
      mb={{ base: '20px', lg: '0px' }}
      {...rest}
    >
      <Box>
        <Text
          textAlign="center"
          fontSize="lg"
          fontWeight="700"
          mb="50px"
          color={textColor}
        >
          Welcome back, sir.
        </Text>
        <NextChakraResponsiveImage
          alt=""
          src={'assets/images/dashboards/Tesla.png'}
          mx="auto"
          mb="60px"
          h="auto"
          style={{
            position: 'static',
            height: 'auto',
          }}
        />
        <Text
          textAlign="center"
          fontSize="lg"
          fontWeight="400"
          mb={{ base: '20px', md: '50px' }}
          me="5px"
          color="secondaryGray.600"
        >
          Your Model S is now in{' '}
          <Text
            as="span"
            textAlign="center"
            fontSize="lg"
            fontWeight="700"
            mb={{ base: '20px', md: '50px' }}
            color={textColor}
          >
            Parking Mode
          </Text>
        </Text>
        <Button
          fontSize="sm"
          mb={{ base: '20px', md: '50px' }}
          w="100%"
          variant="darkBrand"
        >
          Turn on Engine
        </Button>

        <Flex alignItems="center" justify="center">
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="400"
            me="34px"
            color="secondaryGray.600"
          >
            N
          </Text>
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="400"
            me="34px"
            color="secondaryGray.600"
          >
            R
          </Text>
          <Text
            textAlign="center"
            fontSize="50px"
            fontWeight="700"
            me="34px"
            color={textColor}
          >
            P
          </Text>
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="400"
            me="34px"
            color="secondaryGray.600"
          >
            D
          </Text>
          <Text
            textAlign="center"
            fontSize="xl"
            fontWeight="400"
            color="secondaryGray.600"
          >
            M
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}

AddDevice.defaultProps = defaultProps;
