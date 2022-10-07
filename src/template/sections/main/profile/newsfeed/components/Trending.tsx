import React from 'react';

// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import Follow from 'src/template/components/actions/Follow';

import { NextChakraLink } from 'src/template/components/links/links';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type TrendingProps = { [x: string]: any };
const defaultProps: TrendingProps = {};

export default function Trending(props: TrendingProps) {
  const { ...rest } = props;

  // Chakra Color Modev
  const boxBg = useColorModeValue(
    '#C8FCF7 !important',
    '#2D3736 !important'
  );
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const textColorSecondary = useColorModeValue(
    'secondaryGray.700',
    'white'
  );
  return (
    <Card height="max-content" {...rest}>
      <Text fontSize="lg" color={textColor} fontWeight="700" mb="20px">
        Trending Feeds
      </Text>
      <SimpleGrid columns={3} mb="40px" gap="8px">
        <NextChakraLink href="#">
          <NextChakraResponsiveImage
            alt=""
            borderRadius="8px"
            src={'assets/images/profile/image1.png'}
          />
        </NextChakraLink>
        <NextChakraLink href="#">
          <NextChakraResponsiveImage
            alt=""
            borderRadius="8px"
            src="/assets/images/profile/image2.png"
          />
        </NextChakraLink>
        <NextChakraLink href="#">
          <NextChakraResponsiveImage
            alt=""
            borderRadius="8px"
            src="/assets/images/profile/image3.png"
          />
        </NextChakraLink>
        <NextChakraLink href="#">
          <NextChakraResponsiveImage
            alt=""
            borderRadius="8px"
            src="/assets/images/profile/image4.png"
          />
        </NextChakraLink>
        <NextChakraLink href="#">
          <NextChakraResponsiveImage
            alt=""
            borderRadius="8px"
            src="/assets/images/profile/image5.png"
          />
        </NextChakraLink>
        <NextChakraLink href="#">
          <NextChakraResponsiveImage
            alt=""
            borderRadius="8px"
            src="/assets/images/profile/image6.png"
          />
        </NextChakraLink>
      </SimpleGrid>
      <Text fontSize="lg" color={textColor} fontWeight="700" mb="20px">
        Suggestions for you
      </Text>
      <Follow
        mb="26px"
        name="Dragos Markus"
        username="@dragos_markus024"
        sum="-$15.50"
        avatar={'/assets/images/avatars/avatar1.png'}
      />
      <Follow
        mb="26px"
        name="Emily James"
        username="@james.cox.official"
        sum="-$11.37"
        avatar={'/assets/images/avatars/avatar9.png'}
      />
      <Follow
        mb="26px"
        name="Iaon Dint"
        username="@iaondint_0943"
        sum="-$34.90"
        avatar={'/assets/images/avatars/avatar2.png'}
      />
      <Follow
        mb="26px"
        name="William Jackson"
        username="@wllm.jackson"
        sum="-$5.21"
        avatar={'/assets/images/avatars/avatar10.png'}
      />
      <Follow
        mb="40px"
        name="Marius Ionescu"
        username="@marius_balauru97"
        sum="-$5.21"
        avatar={'/assets/images/avatars/avatar7.png'}
      />
      <Text fontSize="lg" color={textColor} fontWeight="700" mb="20px">
        Profile Activity
      </Text>
      <Box borderRadius="20px" bg={boxBg} p="30px">
        <AvatarGroup flexWrap="wrap" mb="20px">
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar1.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar2.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar3.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar4.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar5.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar6.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar7.png'}
          />
          <Avatar
            h="42px"
            w="42px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar8.png'}
          />
          <Avatar
            h="44px"
            w="44px"
            border="3px solid"
            borderColor={boxBg}
            src={'/assets/images/avatars/avatar9.png'}
          />
        </AvatarGroup>

        <Text fontSize="xl" color={textColor} fontWeight="700" mb="10px">
          2,9k Followers Active
        </Text>
        <Text
          pe="20px"
          fontSize="sm"
          color={textColorSecondary}
          fontWeight="500"
        >
          Now is the perfect time for uploading your new social media post!
          <NextChakraLink ms="4px" color={brandColor} href={''}>
            Create a new post!
          </NextChakraLink>
        </Text>
      </Box>
    </Card>
  );
}

Trending.defaultProps = defaultProps;
