import React from 'react';
// Chakra imports
import {
  Flex,
  SimpleGrid,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Statistics from './components/MiniStatistics';
import IconBox from 'src/template/components/icons/IconBox';
import ManagementTable from './components/ManagementTable';
import { tableColumnsManagement } from './variables/tableColumnsManagement';
import tableDataManagement from './variables/tableDataManagement.json';

// Assets
import { MdOutlineBarChart, MdPerson, MdFileCopy } from 'react-icons/md';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

import { NextChakraResponsiveImage } from 'src/template/components/NextChakraImage';

export type DefaultProps = {};

export default function Application() {
  // Chakra Color Mode
  const iconBg = useColorModeValue('secondaryGray.300', 'brandDark.700');
  const iconColor = useColorModeValue('brand.500', 'white');
  return (
    <Flex pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex flexDirection="column" width="stretch">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 2, '2xl': 4 }}
          gap="20px"
          mb="20px"
        >
          <Flex>
            <Statistics
              focused={true}
              bg="linear-gradient(135deg, #8dcec3 0%, #0c6d62 100%)"
              title={'Total Income'}
              value="$4.347"
              detail={
                <Flex alignItems="center">
                  <Icon as={RiArrowUpSFill} color="white" />
                  <Text
                    color="white"
                    fontSize="sm"
                    mx="3px"
                    fontWeight="500"
                  >
                    +20%
                  </Text>
                  <Text color="white" fontSize="sm" fontWeight="500">
                    Since last month
                  </Text>
                </Flex>
              }
              illustration={
                <IconBox
                  w="80px"
                  h="80px"
                  bg="linear-gradient(290.56deg, #8dcec3 -18.35%, #0c6d62 60.45%)"
                  icon={
                    <Icon
                      as={MdOutlineBarChart}
                      w="38px"
                      h="38px"
                      color="white"
                    />
                  }
                />
              }
            />
          </Flex>
          <Flex>
            <Statistics
              title={'Spendings'}
              value="$1.249"
              detail={
                <Flex alignItems="center">
                  <Icon as={RiArrowDownSFill} color="red.500" />
                  <Text
                    color="red.500"
                    fontSize="sm"
                    mx="4px"
                    fontWeight="700"
                  >
                    -12%
                  </Text>
                  <Text
                    color="secondaryGray.600"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    Since last month
                  </Text>
                </Flex>
              }
              illustration={
                <NextChakraResponsiveImage
                  alt=""
                  src={'assets/images/account/FakeBarChart.png'}
                  w={73}
                  h={53}
                />
              }
            />
          </Flex>
          <Flex>
            <Statistics
              title={'Activity'}
              value="1.920"
              detail={
                <Flex alignItems="center">
                  <Icon as={RiArrowUpSFill} color="green.500" />
                  <Text
                    color="green.500"
                    fontSize="sm"
                    mx="4px"
                    fontWeight="700"
                  >
                    +16%
                  </Text>
                  <Text
                    color="secondaryGray.600"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    Since last month
                  </Text>
                </Flex>
              }
              illustration={
                <IconBox
                  w="80px"
                  h="80px"
                  bg={iconBg}
                  icon={
                    <Icon
                      color={iconColor}
                      as={MdPerson}
                      w="38px"
                      h="38px"
                    />
                  }
                />
              }
            />
          </Flex>
          <Flex>
            <Statistics
              title={'Total Projects'}
              value="670"
              detail={
                <Flex alignItems="center">
                  <Icon as={RiArrowUpSFill} color="green.500" />
                  <Text
                    color="green.500"
                    fontSize="sm"
                    mx="4px"
                    fontWeight="700"
                  >
                    +27%
                  </Text>
                  <Text
                    color="secondaryGray.600"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    Since last month
                  </Text>
                </Flex>
              }
              illustration={
                <IconBox
                  w="80px"
                  h="80px"
                  bg={iconBg}
                  icon={
                    <Icon
                      color={iconColor}
                      as={MdFileCopy}
                      w="28px"
                      h="28px"
                    />
                  }
                />
              }
            />
          </Flex>
        </SimpleGrid>
        <ManagementTable
          tableData={tableDataManagement}
          columnsData={tableColumnsManagement}
        />
      </Flex>
    </Flex>
  );
}
