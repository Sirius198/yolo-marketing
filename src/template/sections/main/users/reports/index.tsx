import React from 'react';
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Icon,
  Text,
  Select,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import MiniStatistics from 'src/template/components/card/MiniStatistics';
import IconBox from 'src/template/components/icons/IconBox';
import Conversion from './components/Conversion';
import UserActivity from './components/UserActivity';
import UserReportsTable from './components/UserReportsTable';
import { columnsDataUserReports } from './variables/columnsDataUserReports';
import tableDataUserReports from './variables/tableDataUserReports.json';

import { MdPerson, MdThumbUp } from 'react-icons/md';
import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type DefaultProps = {};

export default function UserReports() {
  // Chakra Color Mode
  const textColorSecondary = 'secondaryGray.600';
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px">
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdPerson} color={brandColor} />
              }
            />
          }
          name="Users Active"
          value="9420"
        />
        <MiniStatistics
          endContent={
            <Text
              color={textColorSecondary}
              fontWeight="500"
              fontSize={{
                base: 'xs',
              }}
              me="10px"
              mt="4px"
            >
              6 May - 7 May
            </Text>
          }
          name="Click Events"
          value="1753"
        />
        <MiniStatistics
          endContent={
            <Flex me="-16px">
              <FormLabel htmlFor="location">
                <Avatar src="/assets/images/users/usa.png" />
              </FormLabel>
              <Select
                id="location"
                variant="mini"
                mt="5px"
                me="0px"
                defaultValue="usa"
              >
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="fra">FRA</option>
              </Select>
            </Flex>
          }
          name="Location"
          value="USA"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={
                <Icon w="28px" h="28px" as={MdThumbUp} color="white" />
              }
            />
          }
          endContent={
            <NextChakraResponsiveImage
              alt=""
              src={'assets/images/users/FakeLineGraph.png'}
              w={89}
              h={50}
            />
          }
          name="Likes"
          value="154"
        />
      </SimpleGrid>
      <Grid
        w="100%"
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column', md: 'unset' }}
        templateColumns={{ md: '1fr 2.6fr' }}
        templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }}
      >
        <Box
          me={{ base: '0px', md: '20px' }}
          mb={{ base: '20px', md: '0px' }}
          gridArea="1 / 1 / 2 / 2"
        >
          <Conversion mb="20px" />
          <UserActivity />
        </Box>
        <Card
          gridArea={{ base: '2 / 1 / 3 / 2', md: '1 / 2 / 2 / 3' }}
          mb={{ base: '20px', md: '0px' }}
        >
          <UserReportsTable
            tableData={tableDataUserReports}
            columnsData={columnsDataUserReports}
          />
        </Card>
      </Grid>
    </Box>
  );
}