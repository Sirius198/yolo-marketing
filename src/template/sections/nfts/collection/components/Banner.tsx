import React from 'react';

// Chakra imports
import {
  Flex,
  Icon,
  Avatar,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import { VSeparator } from 'src/template/components/separator/Separator';

// Assets
import { MdVerified } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type BannerProps = {
  image: any;
  profile: any;
  creator: string;
  name: string;
  items: number;
  owners: number;
  floor: number;
  volume: number;
  desc: string;
};

const defaultProps: BannerProps = {
  image: 'assets/images/nfts/NftBanner2.png',
  profile: 'assets/images/nfts/NftProfile.png',
  creator: 'yolohealth.app',
  name: 'Abstractus®',
  desc: 'The Abstractus® project is an online art show and the First Art NFTs on Ethereum, launched on May 9, 2017. Abstractus® features 28 unique series of cards from 7 different artists. Abstractus® are referenced with CryptoAbstractus® and Crypto in the original ERC-721 Non-Fungible Token Standard, and pre-dates them both. Join the Abstractus® Discord and check out theAbstractus® Docs to find out more.',
  floor: 0.56,
  volume: 33.8,
  owners: 4.6,
  items: 28,
};

export default function Banner(props: BannerProps) {
  const {
    image,
    creator,
    name,
    items,
    owners,
    floor,
    volume,
    desc,
    profile,
  } = props;

  // Chakra Color Mode
  const borderColor = useColorModeValue(
    'white !important',
    '#02201D !important'
  );
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorLink = useColorModeValue('cyan.500', 'white');
  return (
    <Flex
      mb={{ base: '20px', '2xl': '20px' }}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
    >
      <NextChakraResponsiveImage
        alt=""
        src={image}
        w={{ base: '100%', '3xl': '100%' }}
        maxH={{ base: '100%', '3xl': '27.5vh' }}
        // minH={{ base: '140px', md: '100%' }}
        h={140}
        borderRadius="20px"
      />
      <Avatar
        src={profile}
        h={{ base: '170px', xl: '170px' }}
        w={{ base: '170px', xl: '170px' }}
        border="10px solid"
        mt="-95px"
        mb="20px"
        borderColor={borderColor}
      />
      <Text
        color={textColor}
        fontSize="54px"
        fontWeight="700"
        mb="15px"
        lineHeight="100%"
      >
        {name}
      </Text>
      <Flex alignItems="center" mb="40px">
        <Text color="secondaryGray.600" fontSize="lg" fontWeight="400">
          Created by{' '}
          <Text
            as="span"
            color={textColorLink}
            fontSize="lg"
            fontWeight="500"
            me="4px"
          >
            {creator}
          </Text>
        </Text>
        <Icon
          as={MdVerified}
          h="16px"
          w="16px"
          color="cyan.500"
          mt="3px"
        />
      </Flex>
      <Card maxW="100%" w="800px" py="40px" mb="40px">
        <Flex
          w="100%"
          justify="center"
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            me={{ base: '0px', md: '60px' }}
            mb={{ base: '20px', md: '0px' }}
          >
            <Text color={textColor} fontSize="36px" fontWeight="700">
              {items}
            </Text>
            <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
              Items
            </Text>
          </Flex>
          <VSeparator />
          <Flex
            flexDirection="column"
            alignItems="center"
            mx={{ base: '0px', md: '60px' }}
            mb={{ base: '20px', md: '0px' }}
          >
            <Text color={textColor} fontSize="36px" fontWeight="700">
              {owners}
            </Text>
            <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
              Owners
            </Text>
          </Flex>
          <VSeparator />
          <Flex
            flexDirection="column"
            alignItems="center"
            mx={{ base: '0px', md: '30px', lg: '60px' }}
            mb={{ base: '20px', md: '0px' }}
          >
            <Flex me={{ base: '0px', md: '32px' }} alignItems="center">
              <Icon
                as={FaEthereum}
                color={textColor}
                width="17px"
                height="29px"
                me="8px"
              />
              <Text color={textColor} fontSize="36px" fontWeight="700">
                {floor}
              </Text>
            </Flex>
            <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
              Floor Price
            </Text>
          </Flex>
          <VSeparator />
          <Flex
            flexDirection="column"
            alignItems="center"
            ms={{ base: '0px', md: '60px' }}
          >
            <Flex me={{ base: '0px', md: '32px' }} alignItems="center">
              <Icon
                as={FaEthereum}
                color={textColor}
                width="17px"
                height="29px"
                me="8px"
              />
              <Text color={textColor} fontSize="36px" fontWeight="700">
                {volume}
              </Text>
            </Flex>
            <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
              Volume Traded
            </Text>
          </Flex>
        </Flex>
      </Card>
      <Text
        color={textColor}
        fontSize="lg"
        fontWeight="400"
        lineHeight="180%"
        w={{ base: '350px', md: '860px' }}
        maxW="100%"
        textAlign="center"
        mb={{ base: '0px', md: '60px' }}
      >
        {desc}
      </Text>
    </Flex>
  );
}

Banner.defaultProps = defaultProps;
