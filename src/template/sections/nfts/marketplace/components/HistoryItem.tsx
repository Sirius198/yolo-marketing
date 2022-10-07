import React from 'react';
// Chakra imports
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
// Assets
import { FaEthereum } from 'react-icons/fa';
import { NextChakraImage } from 'src/template/components/NextChakraImage';

export type NFTProps = {
  image: any;
  name: string;
  author: string;
  date: string;
  price: string;
  [x: string]: any;
};

const defaultProps: NFTProps = {
  image: 'assets/images/nfts/Nft4.png',
  name: 'Abstract Colors',
  author: 'By Esthera Jackson',
  date: 'Nov 12 2022',
  price: '1.2 ETH',
};

export default function NFT(props: NFTProps) {
  const { image, name, author, date, price } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue('brands.900', 'white');
  const bgItem = useColorModeValue(
    {
      bg: 'white',
      boxShadow: '0px 40px 58px -20px rgba(112, 144, 176, 0.12)',
    },
    { bg: 'brandDark.700', boxShadow: 'unset' }
  );
  const textColorDate = useColorModeValue('secondaryGray.600', 'white');
  return (
    <Card
      _hover={bgItem}
      bg="transparent"
      boxShadow="unset"
      px="24px"
      py="21px"
      transition="0.2s linear"
    >
      <Flex direction={{ base: 'column' }} justify="center">
        <Flex position="relative" alignItems="center">
          <NextChakraImage
            alt=""
            src={image}
            w="66px"
            h="66px"
            borderRadius="20px"
            me="16px"
          />
          <Flex
            flexDirection="column"
            w={{ base: '70%', md: '100%' }}
            me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}
          >
            <Text
              color={textColor}
              fontSize={{
                base: 'md',
              }}
              mb="5px"
              fontWeight="bold"
              me="14px"
            >
              {name}
            </Text>
            <Text
              color="secondaryGray.600"
              fontSize={{
                base: 'sm',
              }}
              fontWeight="400"
              me="14px"
            >
              {author}
            </Text>
          </Flex>
          <Flex
            me={{ base: '4px', md: '32px', xl: '10px', '3xl': '32px' }}
            alignItems="center"
          >
            <Icon as={FaEthereum} color={textColor} width="9px" me="7px" />
            <Text fontWeight="700" fontSize="md" color={textColor}>
              {price}
            </Text>
          </Flex>
          <Text
            ms="auto"
            fontWeight="700"
            fontSize="sm"
            color={textColorDate}
          >
            {date}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}

NFT.defaultProps = defaultProps;
