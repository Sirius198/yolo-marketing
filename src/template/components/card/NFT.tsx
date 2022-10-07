// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from './Card';
// Assets
import React, { useState } from 'react';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { NextChakraImage } from '../NextChakraImage';
import { NextChakraLink } from '../links/links';
import { StaticImageData } from 'next/future/image';

export interface NFTProps {
  image?: string | StaticImageData;
  name?: string;
  author?: string;
  bidders?: string[];
  download?: string;
  currentbid?: string | number;
}

export const defaultProps: NFTProps = {
  name: 'Colorful Heaven',
  author: 'By Mark Benjamin',
  bidders: [
    '/assets/images/avatars/avatar1.png',
    '/assets/images/avatars/avatar2.png',
    '/assets/images/avatars/avatar3.png',
    '/assets/images/avatars/avatar4.png',
    '/assets/images/avatars/avatar1.png',
    '/assets/images/avatars/avatar1.png',
    '/assets/images/avatars/avatar1.png',
    '/assets/images/avatars/avatar1.png',
  ],
  image: '/assets/images/nfts/Nft5.png',
  currentbid: '0.91 ETH',
  download: '#',
};
export default function NFT(props: NFTProps) {
  const { image, name, author, bidders, download, currentbid } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('brandDark.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');
  return (
    <Card p="20px">
      <Flex direction={{ base: 'column' }} justify="center">
        <Box mb={{ base: '20px', '2xl': '20px' }} position="relative">
          <NextChakraImage
            alt=""
            src={image ?? '/assets/images/nfts/Nft5.png'}
            w={{ base: '100%', '3xl': '100%' }}
            h={{ base: '100%', '3xl': '100%' }}
            borderRadius="20px"
          />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: 'whiteAlpha.900' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => {
              setLike(!like);
            }}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'lg',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'md',
                  '3xl': 'lg',
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
            <AvatarGroup
              max={3}
              color={textColorBid}
              size="sm"
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
              fontSize="12px"
            >
              {bidders?.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Flex>
          <Flex
            align="start"
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mt="25px"
          >
            <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Current Bid: {currentbid}
            </Text>
            <NextChakraLink
              href={download ?? '/'}
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
            >
              <Button
                variant="darkBrand"
                color="white"
                fontSize="sm"
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                Place Bid
              </Button>
            </NextChakraLink>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

NFT.defaultProps = defaultProps;
