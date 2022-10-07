import React from 'react';

// Chakra imports
import { Icon, Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';

// Assets
import { MdVerified } from 'react-icons/md';

export type BannerProps = {
  creator: string;
  desc: string;
};

const defaultProps: BannerProps = {
  creator: 'Unknown creator',
  desc: 'Lorem Ipsum, Lorem Ipsum',
};

export default function Banner(props: BannerProps) {
  const { creator, desc } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorLink = useColorModeValue('cyan.500', 'white');
  // Chakra Color Mode
  return (
    <Card p="30px" mb={{ base: '20px', '2xl': '20px' }}>
      <Text color={textColor} fontSize="2xl" fontWeight="700" mb="20px">
        Description
      </Text>
      <Flex alignItems="center" mb="20px">
        <Text color="secondaryGray.600" fontSize="lg" fontWeight="400">
          Created by
        </Text>
        <Text
          color={textColorLink}
          fontSize="lg"
          fontWeight="500"
          mx="4px"
        >
          {creator}
        </Text>
        <Icon
          as={MdVerified}
          h="16px"
          w="16px"
          color="cyan.500"
          mt="3px"
        />
      </Flex>
      <Text
        color={textColor}
        fontSize="lg"
        fontWeight="400"
        lineHeight="180%"
      >
        {desc}
      </Text>
    </Card>
  );
}

Banner.defaultProps = defaultProps;
