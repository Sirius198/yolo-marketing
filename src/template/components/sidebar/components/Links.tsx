import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

// chakra imports
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Icon,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import { FaCircle } from 'react-icons/fa';
import { IRoute } from '../../../../allRoutes';
import { NextChakraLink } from '../../links/links';

export type LinksProps = { routes: IRoute[] };
const defaultProps = {
  routes: [],
};

export function SidebarLinks({ routes }: LinksProps) {
  //   Chakra color mode
  let { pathname } = useRouter();
  let activeColor = useColorModeValue('gray.700', 'white');
  let inactiveColor = useColorModeValue(
    'secondaryGray.600',
    'secondaryGray.600'
  );
  let activeIcon = useColorModeValue('brand.500', 'white');

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName: string) => {
    return pathname.includes(routeName);
  };

  // this function creates the links from the secondary accordions (for example auth -> sign-in -> default)
  const createAccordionLinks = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      return (
        <NextChakraLink
          href={route.layout + route.path}
          key={key}
          passHref
        >
          <ListItem
            ms="28px"
            display="flex"
            alignItems="center"
            mb="10px"
            key={key}
          >
            <Icon
              w="6px"
              h="6px"
              me="8px"
              as={FaCircle}
              color={activeIcon}
            />
            <Text
              color={
                activeRoute(route.path.toLowerCase())
                  ? activeColor
                  : inactiveColor
              }
              fontWeight={
                activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'
              }
              fontSize="lg"
            >
              {route.name}
            </Text>
          </ListItem>
        </NextChakraLink>
      );
    });
  };

  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, key) => {
      if (route.collapse) {
        if (route.hideInNav) {
          return null;
        }
        return (
          <Accordion
            allowToggle
            key={key}
            defaultIndex={key === 0 ? [0] : undefined}
          >
            <AccordionItem border="none" key={key}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="center"
                _hover={{
                  bg: 'unset',
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                borderRadius="8px"
                w={{
                  sm: '100%',
                  xl: '100%',
                  '2xl': '95%',
                }}
                px={route.icon ? undefined : '0px'}
                py="0px"
                bg={'transparent'}
                ms={0}
              >
                {route.icon ? (
                  <Flex
                    py="20px"
                    align="center"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <HStack
                      mb="0"
                      spacing={
                        activeRoute(route.path.toLowerCase())
                          ? '22px'
                          : '26px'
                      }
                    >
                      <Flex
                        w="100%"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Box
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeIcon
                              : inactiveColor
                          }
                          me="12px"
                          mt="6px"
                        >
                          <Icon
                            as={route.icon}
                            width="28px"
                            height="28px"
                            color="inherit"
                          />
                        </Box>
                        <Text
                          me="auto"
                          color={
                            activeRoute(route.path.toLowerCase())
                              ? activeColor
                              : 'secondaryGray.600'
                          }
                          fontWeight="500"
                          fontSize="xl"
                        >
                          {route.name}
                        </Text>
                      </Flex>
                    </HStack>
                    <AccordionIcon
                      ms="auto"
                      color={'secondaryGray.600'}
                      transform={
                        !!route.icon ? undefined : 'translateX(-70%)'
                      }
                    />
                  </Flex>
                ) : (
                  <Flex
                    pt="0px"
                    py={route.topLevel ? '25px' : '10px'}
                    alignItems="center"
                    w="100%"
                  >
                    <HStack
                      spacing={
                        activeRoute(route.path.toLowerCase())
                          ? '22px'
                          : '26px'
                      }
                      ps="34px"
                    >
                      <Text
                        me="auto"
                        color={
                          activeRoute(route.path.toLowerCase())
                            ? activeColor
                            : inactiveColor
                        }
                        fontWeight="500"
                        fontSize={route.topLevel ? 'xl' : 'lg'}
                      >
                        {route.name}
                      </Text>
                    </HStack>
                    <AccordionIcon
                      ms="auto"
                      color={'secondaryGray.600'}
                      transform={undefined}
                    />
                  </Flex>
                )}
              </AccordionButton>
              {route.items?.length && (
                <AccordionPanel
                  pe={route.icon ? undefined : '0px'}
                  py="0px"
                  ps={route.icon ? undefined : '8px'}
                >
                  <List>
                    {
                      route.topLevel
                        ? createLinks(route.items) // for non-bullet accordion links
                        : createAccordionLinks(route.items) // for bullet accordion links
                    }
                  </List>
                </AccordionPanel>
              )}
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <NextChakraLink
            href={route.layout + route.path}
            key={key}
            passHref
          >
            {route.icon ? (
              <Flex
                align="center"
                justifyContent="space-between"
                w="100%"
                // ps="17px"
                ps="34px"
                mb="0px"
              >
                <HStack
                  mb="15px"
                  spacing={
                    activeRoute(route.path.toLowerCase()) ? '22px' : '26px'
                  }
                >
                  <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeIcon
                          : inactiveColor
                      }
                      me="18px"
                      // mt="6px"
                    >
                      <Icon
                        as={route.icon}
                        width="28px"
                        height="28px"
                        color="inherit"
                      />
                    </Box>
                    <Text
                      me="auto"
                      color={
                        activeRoute(route.path.toLowerCase())
                          ? activeColor
                          : 'secondaryGray.600'
                      }
                      fontWeight="500"
                      fontSize="lg"
                    >
                      {route.name}
                    </Text>
                  </Flex>
                </HStack>
              </Flex>
            ) : (
              <ListItem ms={undefined}>
                <Flex ps="34px" alignItems="center" mb="15px">
                  <Text
                    color={
                      activeRoute(route.path.toLowerCase())
                        ? activeColor
                        : inactiveColor
                    }
                    fontWeight="500"
                    fontSize="lg"
                  >
                    {route.name}
                  </Text>
                </Flex>
              </ListItem>
            )}
          </NextChakraLink>
        );
      }
    });
  };

  // const createLinksNew = (routes: IRoute[]) => {
  //   return routes.map((route, key) => {
  //     <div key={route.name} className="inline">
  //       {route.name}
  //     </div>;
  //   });
  // };
  //  BRAND
  return <>{createLinks(routes)}</>;
}

SidebarLinks.defaultProps = defaultProps;

export default SidebarLinks;
