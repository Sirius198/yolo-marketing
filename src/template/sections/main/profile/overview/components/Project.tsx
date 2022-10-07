// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import { NextChakraLink } from 'src/template/components/links/links';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';
import React from 'react';
// Assets
import { MdEdit } from 'react-icons/md';

export type ProjectProps = {
  title: string;
  ranking: string;
  link: string;
  image: any;
  [x: string]: any;
};

const defaultProps: ProjectProps = {
  title: 'Technology behind the Blockchain',
  image: 'assets/images/users/Project1.png',
  ranking: '1',
  link: '#',
};

export default function Project(props: { [x: string]: any }) {
  const { title, ranking, link, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const brandColor = useColorModeValue('brand.500', 'white');
  const bg = useColorModeValue('white', 'brandDark.700');
  return (
    <Card bg={bg} {...rest} p="14px">
      <Flex alignItems="center" direction={{ base: 'column', md: 'row' }}>
        <NextChakraResponsiveImage
          alt=""
          h="80px"
          w="80px"
          src={image}
          borderRadius="8px"
          me="20px"
        />
        <Box mt={{ base: '10px', md: '0' }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {title}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            Project #{ranking} •{' '}
            <NextChakraLink
              fontWeight="500"
              color={brandColor}
              href={link}
              fontSize="sm"
            >
              See project details
            </NextChakraLink>
          </Text>
        </Box>
        <NextChakraLink
          href={link}
          variant="no-hover"
          me="16px"
          ms="auto"
          p="0px !important"
        >
          <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
        </NextChakraLink>
      </Flex>
    </Card>
  );
}

Project.defaultProps = defaultProps;
