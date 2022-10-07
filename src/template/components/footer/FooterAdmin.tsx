/*eslint-disable*/
import React from 'react';
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { NextChakraLink } from '../links/links';

export type FooterAdminProps = {};

export default function Footer() {
  const textColor = useColorModeValue('gray.400', 'white');
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: 'column',
        xl: 'row',
      }}
      alignItems={{
        base: 'center',
        xl: 'start',
      }}
      justifyContent="space-between"
      px={{ base: '30px', md: '50px' }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: 'center',
          xl: 'start',
        }}
        mb={{ base: '20px', xl: '0px' }}
      >
        {' '}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          YoloHealth. All Rights Reserved. Made with love by
          <NextChakraLink
            mx="3px"
            color={textColor}
            href="https://yolohealth.app"
            target="_blank"
            fontWeight="700"
          >
            the Care Team!
          </NextChakraLink>
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <NextChakraLink
            fontWeight="500"
            color={textColor}
            href="mailto:hello@yolohealth.app"
            as="a"
            passHref
          >
            Support
          </NextChakraLink>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <NextChakraLink
            fontWeight="500"
            color={textColor}
            href="https://yolohealth.app/licenses"
          >
            License
          </NextChakraLink>
        </ListItem>
        <ListItem
          me={{
            base: '20px',
            md: '44px',
          }}
        >
          <NextChakraLink
            fontWeight="500"
            color={textColor}
            href="https://yolohealth.app/terms-of-service"
          >
            Terms of Use
          </NextChakraLink>
        </ListItem>
        <ListItem>
          <NextChakraLink
            fontWeight="500"
            color={textColor}
            href="https://blog.yolohealth.app/"
          >
            Blog
          </NextChakraLink>
        </ListItem>
      </List>
    </Flex>
  );
}
