// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';
import React from 'react';

export type BannerProps = {
  banner: any;
  avatar: any;
  name: string;
  job: string;
  posts: string;
  followers: string;
  following: string;
  [x: string]: any;
};

const defaultProps: BannerProps = {
  banner: 'assets/images/auth/banner.png',
  avatar: 'assets/images/avatars/avatar4.png',
  name: 'Adela Parkson',
  job: 'Product Designer',
  posts: '17',
  followers: '9.7k',
  following: '274',
};

export default function Banner(props: BannerProps) {
  const {
    banner,
    avatar,
    name,
    job,
    posts,
    followers,
    following,
    ...rest
  } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const borderColor = useColorModeValue(
    'white !important',
    '#1D2323 !important'
  );
  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems="center" {...rest}>
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="xl"
        mt="10px"
      >
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex
          mx="auto"
          me="60px"
          alignItems="center"
          flexDirection="column"
        >
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {posts}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Posts
          </Text>
        </Flex>
        <Flex
          mx="auto"
          me="60px"
          alignItems="center"
          flexDirection="column"
        >
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Followers
          </Text>
        </Flex>
        <Flex mx="auto" alignItems="center" flexDirection="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Following
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}

Banner.defaultProps = defaultProps;
