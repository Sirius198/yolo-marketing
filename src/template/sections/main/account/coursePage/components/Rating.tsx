// Chakra imports
import {
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Progress,
} from '@chakra-ui/react';
// Custom components
import React from 'react';

// Assets
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';

export type RatingProps = {
  stars: number;
  value: number;
  [x: string]: any;
};
const defaultProps: RatingProps = {
  stars: 4,
  value: 56,
};

export default function CourseInfo(props: RatingProps) {
  // Chakra Color Mode
  const textColorTertiary = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.500'
  );
  const { stars, value, ...rest } = props;
  return (
    <Flex alignItems="center" {...rest}>
      <Progress
        colorScheme="brand"
        value={value}
        h="8px"
        w="340px"
        maxW={{ base: '100px', md: '200px', lg: '150px', '2xl': '340px' }}
        me="10px"
      />
      <Icon
        color="orange.500"
        h={{ base: '16px', md: '24px' }}
        w={{ base: '16px', md: '24px' }}
        as={stars >= 1 ? IoMdStar : IoMdStarOutline}
      />
      <Icon
        color="orange.500"
        h={{ base: '16px', md: '24px' }}
        w={{ base: '16px', md: '24px' }}
        as={stars >= 2 ? IoMdStar : IoMdStarOutline}
      />
      <Icon
        color="orange.500"
        h={{ base: '16px', md: '24px' }}
        w={{ base: '16px', md: '24px' }}
        as={stars >= 3 ? IoMdStar : IoMdStarOutline}
      />
      <Icon
        color="orange.500"
        h={{ base: '16px', md: '24px' }}
        w={{ base: '16px', md: '24px' }}
        as={stars >= 4 ? IoMdStar : IoMdStarOutline}
      />
      <Icon
        color="orange.500"
        h={{ base: '16px', md: '24px' }}
        w={{ base: '16px', md: '24px' }}
        as={stars >= 5 ? IoMdStar : IoMdStarOutline}
        me="20px"
      />

      <Text fontSize="lg" color={textColorTertiary} fontWeight="500">
        {value}%
      </Text>
    </Flex>
  );
}

CourseInfo.defaultProps = defaultProps;
