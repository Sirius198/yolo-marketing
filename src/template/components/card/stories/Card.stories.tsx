import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {
  Center,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Card from '../Card';
import { CustomCardProps } from 'src/theme';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export default {
  title: 'Templates / Components / Card',
  component: Card,
  decorators: [
    (Story: any) => (
      <Center mt="20px" shadow="sm" p="6">
        <Story />
      </Center>
    ),
  ],
} as ComponentMeta<typeof Card>;

export const Default = (props: CustomCardProps) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card {...props}>
      <Text fontSize="lg" mb="24px" color={textColor} fontWeight="bold">
        House Plan
      </Text>
      <NextChakraResponsiveImage
        alt=""
        mx="auto"
        src="/assets/images/dashboards/Blueprint.png"
        mb="40px"
        height="300px"
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
};
