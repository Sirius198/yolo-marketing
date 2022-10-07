import React from 'react';

// Chakra imports
import { Box, Flex, Text } from '@chakra-ui/react';

import Footer from 'src/template/components/footer/FooterAuthCentered';

type PricingLayoutProps = {
  children: React.ReactNode;
  description?: string;
  title?: string;
  image?: any;
  contentTop?: any;
  contentBottom?: any;
};

function PricingLayout(props: PricingLayoutProps) {
  const {
    children,
    title,
    description,
    image,
    contentTop,
    contentBottom,
  } = props;
  return (
    <Flex
      flexDirection="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
      mx={{ base: '10px', lg: '0px' }}
      minH="100vh"
    >
      <Box
        position="absolute"
        minH={{ base: '93vh', md: '93vh' }}
        maxH={{ base: '93vh', md: '93vh' }}
        w={{ md: 'calc(100vw)' }}
        maxW={{ md: 'calc(100vw)' }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={image}
        bgSize="cover"
        mx={{ md: 'auto' }}
      ></Box>
      <Flex
        w={{ base: '100%', md: 'max-content' }}
        p={{ base: '10px', md: '50px' }}
        h="max-content"
        mx="auto"
        maxW="100%"
        mt={contentTop}
        mb={contentBottom}
      >
        {title && description ? (
          <Flex
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            align="center"
            mt="125px"
            mb="30px"
          >
            <Text fontSize="4xl" color="white" fontWeight="bold">
              {title}
            </Text>
            <Text
              fontSize="md"
              color="white"
              fontWeight="normal"
              mt="10px"
              mb="26px"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '333px' }}
            >
              {description}
            </Text>
          </Flex>
        ) : null}
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default PricingLayout;
