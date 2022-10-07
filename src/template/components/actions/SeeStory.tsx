// Chakra imports
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  DarkMode,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { NextChakraResponsiveImage } from '../NextChakraImage';

export interface SeeStoryProps extends ButtonProps {
  name?: string;
  avatar?: string;
  action?: () => any;
  sum?: string | number;
  image?: string;
}

const defaultProps: SeeStoryProps = {
  name: 'Lorem ipsum dolor sit amet consectetur',
  avatar: '/assets/images/avatars/avatar1.png',
  action: () => {},
};

export default function SeeStory(props: SeeStoryProps) {
  const { sum, avatar, name, action, image, ...rest } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue(
    'white !important',
    '#1D2323 !important'
  );
  return (
    <Button
      bg="transparent"
      variant="no-hover"
      fontWeight="700"
      display="flex"
      h="max-content"
      w="max-content"
      minW="max-content"
      boxShadow="unset"
      onClick={onOpen}
      {...rest}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mx="8px"
          bg="transparent"
          boxShadow="unset"
          height="70%"
        >
          <ModalBody p="0px" bg="transparent">
            <Box
              position="relative"
              minH="90%"
              h="90%"
              borderRadius="16px"
            >
              <NextChakraResponsiveImage
                alt=""
                zIndex="98"
                borderRadius="16px"
                src={
                  image ? image : '/assets/images/profile/postImage.png'
                }
              />
              <Box
                position="absolute"
                top="0px"
                zIndex="99"
                h="100%"
                w="100%"
                borderRadius="16px"
                bg="linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 50%)"
              />
            </Box>
          </ModalBody>
          <Flex
            position="absolute"
            left="50%"
            transform="translate(-50%,0px)"
            bottom="20px"
            zIndex="100"
            w="90%"
          >
            <Input
              variant="story"
              placeholder="Write your comment..."
              _focus={{ borderColor: 'white !important' }}
            />
            <IconButton
              aria-label="Favourite"
              me="2px"
              px="0px"
              variant="no-hover"
              bg="transparent"
            >
              <Icon
                as={MdOutlineFavoriteBorder}
                h="24px"
                w="24px"
                color="white"
              />
            </IconButton>
            <IconButton
              aria-label="Send"
              px="0px"
              variant="no-hover"
              bg="transparent"
            >
              <Icon
                as={IoPaperPlaneOutline}
                h="24px"
                w="24px"
                color="white"
              />
            </IconButton>
          </Flex>
          <DarkMode>
            <ModalCloseButton color="white" zIndex="99" />
          </DarkMode>{' '}
        </ModalContent>
      </Modal>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <Flex
          mx="auto"
          h="max-content"
          w="max-content"
          p="2px"
          borderRadius="50%"
          bg="linear-gradient(109.6deg, #FF9966 17.44%, #FF5E62 78.63%)"
        >
          <Avatar
            border="3px solid"
            borderColor={borderColor}
            h="50px"
            w="50px"
            src={avatar}
          />
        </Flex>
        {name ? (
          <Text
            mt="10px"
            textAlign="center"
            color={textColor}
            fontSize="sm"
            fontWeight="500"
          >
            {name}
          </Text>
        ) : null}
      </Flex>
    </Button>
  );
}

SeeStory.defaultProps = defaultProps;
