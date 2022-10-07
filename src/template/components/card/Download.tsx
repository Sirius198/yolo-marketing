// Chakra imports
import { Badge, Flex, Icon, Image, Text } from '@chakra-ui/react';
// Custom components
import Card from './Card';
// Custom icons
import React from 'react';
import { IoDocumentText, IoLaptopOutline } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';
import { NextChakraImage } from '../NextChakraImage';

export interface DownloadProps {
  image?: string;
  name?: string;
  type?: 'PRO' | 'free';
  date?: string;
  pack?: string;
  version?: string;
}

export const defaultProps: DownloadProps = {
  image: '/assets/images/dashboards/Debit.png',
  name: 'Download Stuff',
  type: 'PRO',
  date: '2022-10-12',
  pack: 'Download pack',
  version: 'latest',
};

export default function Download(props: DownloadProps) {
  const { image, name, type, date, pack, version } = props;

  return (
    <Card p="20px">
      <Flex direction={{ base: 'column', '2xl': 'row' }}>
        <NextChakraImage
          alt=""
          src={image ?? '/assets/images/dashboards/Debit.png'}
          w={{ base: '100%', '2xl': '138px' }}
          h={{ base: '100%', '2xl': '122px' }}
          borderRadius="20px"
          me="40px"
          mb={{ base: '30px', '2xl': '0px' }}
        />
        <Flex
          flexDirection="column"
          h="100%"
          align={{ base: 'center', xl: 'start' }}
          justify={{ base: 'center', xl: 'center' }}
        >
          <Flex mb="20px" align="center">
            <Text
              color="brandDark.700"
              fontWeight="bold"
              fontSize={{
                base: 'sm',
                '2sm': 'md',
                md: 'md',
                lg: '15px',
                xl: 'lg',
                '2xl': '24px',
              }}
              me="10px"
            >
              {name}
            </Text>
            <Badge
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="70px"
              p={{ base: '0px 14px', '2xl': '0px 18px' }}
              h="26px"
              fontSize="xs"
              fontWeight="bold"
              color="white"
              bg={
                type?.toLowerCase() === 'pro'
                  ? 'linear-gradient(135deg, #8dcec3 0%, #0c6d62 100%)'
                  : '#01B574'
              }
            >
              {type}
            </Badge>
          </Flex>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Flex align="center" me={{ base: '8px', lg: '20px' }}>
              <Icon
                mt="2px"
                h="20px"
                w="20px"
                color="brandDark.700"
                as={IoDocumentText}
                me="8px"
              />
              <Text
                color="brandDark.700"
                fontSize={{ base: 'sm', '2xl': 'md' }}
              >
                {pack}
              </Text>
            </Flex>
            <Flex
              align="center"
              me={{ base: '0px', md: '8px', lg: '0px', xl: '20px' }}
            >
              <Icon
                as={IoLaptopOutline}
                h="18px"
                w="18px"
                color="brandDark.700"
                me="8px"
              />
              <Text
                color="brandDark.700"
                fontSize={{ base: 'sm', '2xl': 'md' }}
              >
                {version}
              </Text>
            </Flex>
            <Flex align="center" my={{ base: '4px', '2xl': '0px' }}>
              <Icon
                as={MdDateRange}
                h="18px"
                w="18px"
                color="brandDark.700"
                me="8px"
              />
              <Text
                color="brandDark.700"
                fontSize={{ base: 'sm', '2xl': 'md' }}
              >
                {date}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

Download.defaultProps = defaultProps;
