import React from 'react';

// Chakra imports
import {
  Avatar,
  Flex,
  Button,
  Text,
  useColorModeValue,
  FlexProps,
} from '@chakra-ui/react';

export interface FollowProps extends FlexProps {
  username: string;
  avatar: string;
  name: string;
  action?: () => any;
  sum?: string | number;
}

export const defaultProps: FollowProps = {
  username: 'Nnenna',
  avatar: '/assets/images/avatars/avatar1.png',
  name: 'Cool name',
  action: () => {},
};

export default function Follow(props: FollowProps) {
  const { username, avatar, name, action, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" {...rest}>
      <Avatar
        h={{ base: '40px', '2xl': '50px' }}
        w={{ base: '40px', '2xl': '50px' }}
        src={avatar}
        me="16px"
      />
      <Flex direction="column" align="start" me="auto">
        <Text
          color={textColor}
          fontSize={{ base: 'sm', '2xl': 'md' }}
          me="6px"
          fontWeight="700"
        >
          {name}
        </Text>
        <Text
          color="secondaryGray.600"
          fontSize={{ base: 'xs', '2xl': 'sm' }}
          fontWeight="500"
        >
          {username}
        </Text>
      </Flex>
      <Button
        ms="auto"
        bg="transparent"
        variant="no-hover"
        color={brandColor}
        fontSize="sm"
        fontWeight="700"
        onClick={action}
      >
        Follow
      </Button>
    </Flex>
  );
}

Follow.defaultProps = defaultProps;
