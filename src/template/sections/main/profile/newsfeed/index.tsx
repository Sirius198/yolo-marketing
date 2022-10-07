import React from 'react';
// Chakra imports
import { Flex, Text, useColorModeValue, Box } from '@chakra-ui/react';

// Custom components
import { VSeparator } from 'src/template/components/separator/Separator';
import Trending from './components/Trending';
import Stories from './components/Stories';
import Post from './components/Post';
import Comment from 'src/template/components/dataDisplay/Comment';
import Filter from './components/Filter';

export type DefaultProps = {};

export default function Newsfeed() {
  // Chakra color mode
  const textColor = useColorModeValue('gray.700', 'white');
  const paleGray = useColorModeValue(
    'secondaryGray.400',
    'whiteAlpha.100'
  );

  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Flex
        flexDirection="column"
        mb={{ base: '20px', xl: 'unset' }}
        maxW={{ xl: '65%', '2xl': '72%' }}
      >
        <Stories mb="50px" />
        <Flex mb="20px">
          <Text
            me="auto"
            ms="20px"
            fontSize="2xl"
            fontWeight="700"
            color={textColor}
          >
            Feeds
          </Text>
          <Filter />
        </Flex>
        <Post
          likes="28.5k"
          comments="34"
          avatar={'assets/images/avatars/avatar10.png'}
          name="Esthera William"
          username="@esthera.william"
          image={'assets/images/profile/postImage.png'}
          shares="156"
          saves="20"
          you={'assets/images/avatars/avatar4.png'}
          commentBlocks={
            <Box>
              <Comment
                avatar="/assets/images/avatars/avatar10.png"
                name="@esthera.william"
                text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything."
                tags={['photography', 'portrait', 'image']}
                time="24 mins ago"
                pe="20px"
              />
              <Comment
                avatar="/assets/images/avatars/avatar2.png"
                name="@roberto.michael91  "
                text="Wow! This is an amazing point of view! The time is now for it to be okay to be great! 🙏🏼😁"
                time="21 mins ago"
                pe="20px"
              />{' '}
            </Box>
          }
        />
      </Flex>
      <VSeparator
        mx="20px"
        bg={paleGray}
        display={{ base: 'none', xl: 'flex' }}
      />
      <Trending
        w={{ base: '100%', xl: '500px', '2xl': '400px' }}
        maxH={{ base: '100%', xl: '1170px', '2xl': '100%' }}
      />
    </Flex>
  );
}
