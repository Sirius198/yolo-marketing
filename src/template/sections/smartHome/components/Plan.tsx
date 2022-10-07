import React from 'react';

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

export type CircularProgressProps = {};
const defaultProps: CircularProgressProps = {};

export default function CircularProgress() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card p="26px">
      <Text fontSize="lg" mb="24px" color={textColor} fontWeight="bold">
        House Plan
      </Text>
      <NextChakraResponsiveImage
        alt=""
        mx="auto"
        src="/assets/images/dashboards/Blueprint.png"
        mb="40px"
      />
      <Flex>
        <Box>
          <Text fontSize="sm" color="secondaryGray.600" fontWeight="500">
            First Floor
          </Text>
          <Text fontSize="sm" color={textColor} fontWeight="bold">
            22 Seaview, 2073sq ft
          </Text>
        </Box>
        <Button fontSize="sm" ms="auto" variant="darkBrand">
          See all plans
        </Button>
      </Flex>
    </Card>
  );
}

CircularProgress.defaultProps = defaultProps;
