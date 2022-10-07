import {
  Avatar,
  Button,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import React from 'react';
import { NextChakraLink } from '../links/links';

export type CommentProps = {
  avatar: string;
  name: string;
  text: string;
  tags?: string[];
  time: string;
  [x: string]: any;
};

const defaultProps: CommentProps = {
  avatar: 'assets/images/avatars/avatar10.png',
  name: '@roberto.michael91',
  text: 'Wow! This is an amazing point of view! The time is now for it to be okay to be great! 🙏🏼😁',
  tags: ['photography', 'portrait', 'image'],
  time: '21 mins ago',
};

export default function Comment(props: CommentProps) {
  const { avatar, name, text, tags, time, ...rest } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue(
    'secondaryGray.600',
    'white'
  );
  const textGray = useColorModeValue('#3D4B49', 'secondaryGray.600');
  return (
    <Flex mb="30px" {...rest}>
      <Avatar src={avatar} w="50px" h="50px" me="15px" />
      <Flex direction="column">
        <Text color={textColor} fontWeight="400" fontSize="md" mt="6px">
          <Text as="span" fontSize="md" color={textColor} fontWeight="700">
            {name}
          </Text>{' '}
          {text}
        </Text>
        <Flex>
          {tags
            ? tags.map((tag, key) => {
                return (
                  <NextChakraLink
                    href={`#${tag}`}
                    me="4px"
                    key={key}
                    color="secondaryGray.600"
                    fontSize="md"
                    fontWeight="400"
                  >
                    #{tag}
                  </NextChakraLink>
                );
              })
            : null}
        </Flex>
        <Flex align="center">
          <Text fontSize="md" color={textColorSecondary} fontWeight="500">
            {time}
          </Text>
          <Button
            color={textGray}
            variant="no-hover"
            fontWeight="500"
            boxShadow="none"
            w="max-content"
          >
            Reply
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

Comment.defaultProps = defaultProps;
