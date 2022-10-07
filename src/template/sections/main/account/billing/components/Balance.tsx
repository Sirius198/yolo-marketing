import React from 'react';

// Chakra imports
import {
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';

// Custom components
import Transaction from 'src/template/components/dataDisplay/Transaction';
import Card from 'src/template/components/card/Card';

import {
  MdOutlineMoreHoriz,
  MdDomain,
  MdElectricCar,
} from 'react-icons/md';
import { NextChakraImage } from 'src/template/components/NextChakraImage';

export type BalanceProps = { [x: string]: any };
const defaultProps: BalanceProps = {};

export default function Balance(props: BalanceProps) {
  const { ...rest } = props;
  // Ellipsis modals
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  // Chakra Color Mode
  const blueIcon = useColorModeValue('cyan.500', 'white');
  const greenIcon = useColorModeValue('green.500', 'white');
  const balanceBg = useColorModeValue('brand.900', '#2D3736');
  return (
    <Card flexDirection="column" w="100%" {...rest}>
      <Flex
        justify="space-between"
        p="16px"
        mb="20px"
        borderRadius="16px"
        bgColor={balanceBg}
        bgImage="/assets/images/dashboards/balanceImg.png"
        bgSize="cover"
      >
        <Flex alignItems="center" justify="space-between" w="100%">
          <Flex flexDirection="column" me="20px">
            <Text color="white" fontSize="sm" fontWeight="500">
              Overall Revenue
            </Text>
            <Text
              color="white"
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              $3942.58
            </Text>
          </Flex>
          <Flex flexDirection="column" ms="auto" alignItems="flex-end">
            <Menu isOpen={isOpen1} onClose={onClose1}>
              <MenuButton onClick={onOpen1}>
                <Icon
                  cursor="pointer"
                  as={MdOutlineMoreHoriz}
                  color="white"
                  mt="-2px"
                  w="30px"
                  h="30px"
                />
              </MenuButton>
              <MenuList
                border="transparent"
                backdropFilter="blur(63px)"
                bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)"
                borderRadius="20px"
              >
                <MenuItem
                  borderRadius="8px"
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                  _focus={{
                    bg: 'transparent',
                  }}
                  mb="10px"
                  color="white"
                >
                  Action
                </MenuItem>
                <MenuItem
                  borderRadius="8px"
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                  _focus={{
                    bg: 'transparent',
                  }}
                  mb="10px"
                  color="white"
                >
                  Another action
                </MenuItem>
                <MenuItem
                  borderRadius="8px"
                  _hover={{
                    bg: 'transparent',
                  }}
                  _active={{
                    bg: 'transparent',
                  }}
                  _focus={{
                    bg: 'transparent',
                  }}
                  mb="10px"
                  color="white"
                >
                  Something else here
                </MenuItem>
              </MenuList>
            </Menu>
            <NextChakraImage
              alt=""
              src="/assets/images/dashboards/fakeGraph.png"
              w="59px"
              h="17px"
              mt="6px"
            />
          </Flex>
        </Flex>
      </Flex>
      <Text
        color="secondaryGray.600"
        fontWeight="500"
        fontSize="sm"
        mb="10px"
      >
        Recent
      </Text>
      <Flex flexDirection="column">
        <Transaction
          mb="20px"
          name="Bill & Taxes"
          date="Today, 16:36"
          sum="-$154.50"
          icon={<Icon as={MdDomain} color={blueIcon} w="20px" h="18px" />}
        />
        <Transaction
          name="Car Energy"
          date="23 Jun, 13:06"
          sum="-$40.50"
          icon={
            <Icon as={MdElectricCar} color={greenIcon} w="20px" h="18px" />
          }
        />
      </Flex>
    </Card>
  );
}

Balance.defaultProps = defaultProps;
