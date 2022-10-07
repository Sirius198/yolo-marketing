import {
  Avatar,
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import { FaRegCommentDots } from 'react-icons/fa';
import {} from 'react-icons/io';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import {
  MdOutlineFavoriteBorder,
  MdShare,
  MdBookmarkBorder,
  MdOutlineAttachment,
  MdOutlineTagFaces,
  MdImage,
} from 'react-icons/md';

// Custom components
import Card from 'src/template/components/card/Card';
import { HSeparator } from 'src/template/components/separator/Separator';
import React from 'react';
import SeeStory from 'src/template/components/actions/SeeStory';
import TransparentMenu from 'src/template/components/menu/TransparentMenu';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';
import Comment from 'src/template/components/dataDisplay/Comment';

export type PostProps = {
  avatar: any;
  name: string;
  username: string;
  image: any;
  likes: string;
  comments: string;
  shares: string;
  saves: string;
  commentBlocks: any;
  you: any;
  [x: string]: any;
};

const defaultProps: PostProps = {
  likes: '28.5k',
  comments: '34',
  avatar: 'assets/images/avatars/avatar10.png',
  name: 'Esthera William',
  username: '@esthera.william',
  image: 'assets/images/profile/postImage.png',
  shares: '156',
  saves: '20',
  you: 'assets/images/avatars/avatar4.png',
  commentBlocks: (
    <Box>
      <Comment
        avatar={'assets/images/avatars/avatar10.png'}
        name="@esthera.william"
        text="I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They&#39;re slowed down by their perception of themselves. If you&#39;re taught you can’t do anything, you won’t do anything. I was taught I could do everything."
        tags={['photography', 'portrait', 'image']}
        time="24 mins ago"
        pe="20px"
      />
      <Comment
        avatar={'assets/images/avatars/avatar2.png'}
        name="@roberto.michael91  "
        text="Wow! This is an amazing point of view! The time is now for it to be okay to be great! 🙏🏼😁"
        time="21 mins ago"
        pe="20px"
      />{' '}
    </Box>
  ),
};

export default function Post(props: { [x: string]: any }) {
  const {
    avatar,
    name,
    username,
    image,
    likes,
    comments,
    shares,
    saves,
    commentBlocks,
    you,
    ...rest
  } = props;
  // Chakra color mode
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Card p={{ base: '15px', md: '30px' }} {...rest}>
      <Box mb="45px" w="100%">
        <Flex justify="space-between" alignItems="center" w="100%">
          <Flex>
            <SeeStory
              action={() => console.log('Story seen!')}
              ps="0px"
              avatar={avatar}
              w="40px"
              h="40px"
              borderRadius="12px"
            />
            <Flex flexDirection="column">
              <Text fontSize="md" color={textColor} fontWeight="700">
                {name}
              </Text>
              <Text fontSize="sm" color="gray.500" fontWeight="500">
                {username}
              </Text>
            </Flex>
          </Flex>
          <TransparentMenu
            icon={
              <Icon
                as={IoEllipsisHorizontal}
                w="24px"
                h="24px"
                color={textColor}
              />
            }
          />
        </Flex>
      </Box>

      <Flex flexDirection="column">
        <NextChakraResponsiveImage
          alt=""
          src={image}
          minW={{ sm: '270px' }}
          minH={{ sm: '270px' }}
          h="300px"
          borderRadius="16px"
          mb="30px"
        />
        <Box px={{ md: '20px' }}>
          <Flex justify="space-between" alignItems="center" mb="30px">
            <Flex alignItems="center" color={textColor}>
              <Icon
                as={MdOutlineFavoriteBorder}
                w="18px"
                h="18px"
                me="4px"
                cursor="pointer"
              />
              <Text fontSize="md" fontWeight="500">
                {likes}
                <Text
                  as="span"
                  display={{ base: 'none', md: 'unset' }}
                  fontSize="md"
                  fontWeight="500"
                >
                  {' '}
                  Likes
                </Text>
              </Text>
            </Flex>
            <Flex alignItems="center" color={textColor}>
              <Icon
                as={FaRegCommentDots}
                w="18px"
                h="18px"
                me="4px"
                cursor="pointer"
              />
              <Text fontSize="md" fontWeight="500">
                {comments}
                <Text
                  as="span"
                  display={{ base: 'none', md: 'unset' }}
                  fontSize="md"
                  fontWeight="500"
                >
                  {' '}
                  Comments
                </Text>
              </Text>
            </Flex>
            <Flex alignItems="center" color={textColor}>
              <Icon
                as={MdShare}
                w="18px"
                h="18px"
                me="4px"
                cursor="pointer"
              />
              <Text fontSize="md" fontWeight="500">
                {shares}
                <Text
                  as="span"
                  display={{ base: 'none', md: 'unset' }}
                  fontSize="md"
                  fontWeight="500"
                >
                  {' '}
                  Shares
                </Text>
              </Text>
            </Flex>
            <Flex alignItems="center" color={textColor}>
              <Icon
                as={MdBookmarkBorder}
                w="18px"
                h="18px"
                me="4px"
                cursor="pointer"
              />
              <Text fontSize="md" fontWeight="500" me="3px">
                {saves}
                <Text
                  as="span"
                  display={{ base: 'none', md: 'unset' }}
                  fontSize="md"
                  fontWeight="500"
                >
                  {' '}
                  Saves
                </Text>
              </Text>
            </Flex>
          </Flex>
          <HSeparator mb="26px" />
          {commentBlocks}
          <Flex alignItems="center" position="relative">
            <Avatar
              display={{ base: 'none', md: 'unset' }}
              src={you}
              w="50px"
              h="50px"
              me="15px"
            />
            <Input
              variant="social"
              placeholder="Write your comment..."
              _focus={{ borderColor: 'cyan.500' }}
            />
            <Box position="absolute" right="0px">
              {' '}
              <IconButton
                aria-label=""
                me="2px"
                px="0px"
                variant="no-hover"
                bg="transparent"
              >
                <Icon
                  as={MdOutlineAttachment}
                  h="20px"
                  w="20px"
                  color="secondaryGray.700"
                  transform="rotate(270deg)"
                />
              </IconButton>
              <IconButton
                aria-label=""
                me="2px"
                px="0px"
                variant="no-hover"
                bg="transparent"
              >
                <Icon
                  as={MdOutlineTagFaces}
                  h="20px"
                  w="20px"
                  color="secondaryGray.700"
                />
              </IconButton>
              <IconButton
                aria-label=""
                me="2px"
                px="0px"
                variant="no-hover"
                bg="transparent"
              >
                <Icon
                  as={MdImage}
                  h="20px"
                  w="20px"
                  color="secondaryGray.700"
                />
              </IconButton>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}

Post.defaultProps = defaultProps;
