import React from 'react';

// Chakra imports
import {
  Flex,
  Icon,
  Avatar,
  Text,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import { MdVerified, MdOutlineContentCopy } from 'react-icons/md';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type BannerProps = {
  image: any;
  address: string;
  name: string;
  wallet: string;
  date: string;
  profile: any;
  [x: string]: any;
};

const defaultProps: BannerProps = {
  image: 'assets/images/nfts/NftBanner3.png',
  profile: 'assets/images/avatars/avatarYoloHealth.png',
  wallet: '7MVqsRijvkNBhXSCLSKP2Gpc8HsGVqR7iWnLpZynz8DK',
  address: 'yolohealth.app',
  name: 'YoloHealth',
  date: 'Joined 17 Nov 2019',
};

export default function Banner(props: BannerProps) {
  const { image, address, name, wallet, date, profile } = props;

  let newWallet = wallet.slice(0, 4);
  newWallet = newWallet.concat('...');
  newWallet = newWallet.concat(
    wallet.slice(wallet.length - 4, wallet.length)
  );
  const toast = useToast();
  // Chakra Color Mode
  const borderColor = useColorModeValue(
    'white !important',
    '#02201D !important'
  );
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorLink = useColorModeValue('cyan.500', 'white');
  return (
    <Flex
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
        // h={{ base: '140px', md: '100%' }}
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
      <Flex alignItems="center" mb="20px">
        <Text
          color={textColor}
          fontSize={{ base: '40px', lg: '54px' }}
          fontWeight="700"
          lineHeight="100%"
          me="6px"
        >
          {name}
        </Text>
        <Icon
          as={MdVerified}
          h="34px"
          w="34px"
          color="cyan.500"
          mt="12px"
        />
      </Flex>
      <Flex
        alignItems="center"
        mb="14px"
        cursor="pointer"
        onClick={function () {
          navigator.clipboard.writeText(wallet);
          toast({
            title: `Wallet address copied!`,
            position: 'top',
            status: 'success',
            isClosable: true,
          });
        }}
      >
        <Text
          color="secondaryGray.600"
          fontSize="lg"
          fontWeight="400"
          mx="4px"
        >
          {newWallet}
        </Text>
        <Icon
          as={MdOutlineContentCopy}
          h="14px"
          w="14px"
          color="secondaryGray.600"
          mt="6px"
        />
      </Flex>
      <Text
        color={textColorLink}
        fontSize="lg"
        fontWeight="500"
        mx="4px"
        mb="14px"
      >
        {address}
      </Text>
      <Text
        color={textColor}
        fontSize="lg"
        fontWeight="500"
        lineHeight="180%"
        w="860px"
        maxW="100%"
        textAlign="center"
        mb="60px"
      >
        {date}
      </Text>
    </Flex>
  );
}

Banner.defaultProps = defaultProps;
