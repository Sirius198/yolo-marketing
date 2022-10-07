// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Badge,
  Icon,
} from '@chakra-ui/react';
// Custom components
import Card from './Card';
import IconBox from '../icons/IconBox';
// Assets
import React from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import { IoLogoInstagram } from 'react-icons/io5';

export interface CourseProps {
  icon?: JSX.Element;
  title?: string;
  desc?: string;
  date?: string;
  day?: string;
  time?: string;
  topics?: string[];
  bgBox?: string;
}

const defaultProps: CourseProps = {
  bgBox:
    'linear-gradient(115.07deg, #29E9F5 -9.41%, #7A64FF 28.04%, #FF508B 71.85%, #FD6D53 112.49%, #FD6D53 112.49%)',
  icon: <Icon as={IoLogoInstagram} color="white" w="100px" h="100px" />,
  title: 'Instagram Marketing 2022: Complete Guide To Growth',
  desc: 'Attract Hyper-Targeted Instagram Followers, Convert Followers to Paying Customers, & Expand your Brand Using Instagram',
  day: 'Mon',
  date: 'January 05',
  topics: ['Social Media Marketing', 'Instagram Marketing'],
  time: '1h 30 min',
};

export default function Course(props: CourseProps) {
  const { icon, title, desc, date, day, time, topics, bgBox } = props;
  const textColor = useColorModeValue('brandDark.700', 'white');
  const textBrand = useColorModeValue('brand.500', 'white');
  const bgBadge = useColorModeValue('secondaryGray.300', 'whiteAlpha.50');
  return (
    <Card p="20px" h="max-content" minH={{ md: '450px', xl: 'auto' }}>
      <Flex direction={{ base: 'column', md: 'column', xl: 'row' }}>
        <IconBox
          bg={bgBox}
          icon={
            icon ?? (
              <Icon
                as={IoLogoInstagram}
                color="white"
                w="100px"
                h="100px"
              />
            )
          }
          minW={{ base: '100%', xl: '270px' }}
          minH={{ base: '200px', xl: '270px' }}
          borderRadius="20px"
          me="34px"
        />
        <Flex
          justify="space-between"
          flexDirection="column"
          mb="auto"
          py="30px"
          pb={{ base: '0px', md: '0px' }}
        >
          <Flex display={{ base: 'block', xl: 'flex' }}>
            <Box flexDirection="column" w={{ xl: '68%' }} mb="25px">
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'xl',
                  xl: 'xl',
                  '2xl': '28px',
                }}
                mb="10px"
                fontWeight="700"
              >
                {title}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: 'md',
                }}
                fontWeight="400"
                me="14px"
              >
                {desc}
              </Text>
            </Box>
            <Text
              ms="auto"
              mt="10px"
              color="secondaryGray.600"
              fontSize={{
                base: 'md',
              }}
              fontWeight="500"
            >
              {day} •{' '}
              <Text
                as="span"
                color={textColor}
                fontSize={{
                  base: 'md',
                }}
                fontWeight="500"
                ms="4px"
              >
                {date}
              </Text>
            </Text>
          </Flex>
          <Flex w="100%" flexWrap="wrap">
            {topics?.map((topic, key) => (
              <Badge
                key={key}
                bg={bgBadge}
                textAlign="center"
                mb={{ base: '20px', md: '0px' }}
                color={textBrand}
                me="10px"
                h="max-content"
              >
                {topic}
              </Badge>
            ))}
            <Flex
              align="center"
              ms={{ base: '0px', xl: 'auto' }}
              pe={{ base: '10px', md: '0px' }}
            >
              <Icon as={MdOutlineTimer} color={textColor} me="6px" />
              <Text
                color={textColor}
                fontSize={{
                  base: 'sm',
                }}
                fontWeight="500"
                me="14px"
              >
                {time}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

Course.defaultProps = defaultProps;
