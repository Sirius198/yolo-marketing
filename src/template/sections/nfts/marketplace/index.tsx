import React from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

// Custom components
import Banner from './components/Banner';
import TableTopCreators from './components/TableTopCreators';
import HistoryItem from './components/HistoryItem';
import NFT from 'src/template/components/card/NFT';
import Card from 'src/template/components/card/Card';

import tableDataTopCreators from './variables/tableDataTopCreators.json';
import { tableColumnsTopCreators } from './variables/tableColumnsTopCreators';
import { NextChakraLink } from 'src/template/components/links/links';

export type DefaultProps = {};

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
        >
          <Banner />
          <Flex flexDirection="column">
            <Flex
              mt="45px"
              mb="20px"
              justifyContent="space-between"
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              <Text
                color={textColor}
                fontSize="2xl"
                ms="24px"
                fontWeight="700"
              >
                Trending NFTs
              </Text>
              <Flex
                alignItems="center"
                me="20px"
                ms={{ base: '24px', md: '0px' }}
                mt={{ base: '20px', md: '0px' }}
              >
                <NextChakraLink
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                  href="#art"
                >
                  Art
                </NextChakraLink>
                <NextChakraLink
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                  href="#music"
                >
                  Music
                </NextChakraLink>
                <NextChakraLink
                  color={textColorBrand}
                  fontWeight="500"
                  me={{ base: '34px', md: '44px' }}
                  href="#collectibles"
                >
                  Collectibles
                </NextChakraLink>
                <NextChakraLink
                  color={textColorBrand}
                  fontWeight="500"
                  href="#sports"
                >
                  Sports
                </NextChakraLink>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
              <NFT
                name="Abstract Colors"
                author="By Esthera Jackson"
                bidders={[
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar2.png',
                  '/assets/images/avatars/avatar3.png',
                  '/assets/images/avatars/avatar4.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                ]}
                image={'assets/images/nfts/Nft1.png'}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                name="ETH AI Brain"
                author="By Nick Wilson"
                bidders={[
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar2.png',
                  '/assets/images/avatars/avatar3.png',
                  '/assets/images/avatars/avatar4.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                ]}
                image={'assets/images/nfts/Nft2.png'}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                name="Mesh Gradients "
                author="By Will Smith"
                bidders={[
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar2.png',
                  '/assets/images/avatars/avatar3.png',
                  '/assets/images/avatars/avatar4.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                ]}
                image={'assets/images/nfts/Nft3.png'}
                currentbid="0.91 ETH"
                download="#"
              />
            </SimpleGrid>
            <Text
              mt="45px"
              mb="36px"
              color={textColor}
              fontSize="2xl"
              ms="24px"
              fontWeight="700"
            >
              Recently Added
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap="20px"
              mb={{ base: '20px', xl: '0px' }}
            >
              <NFT
                name="Swipe Circles"
                author="By Peter Will"
                bidders={[
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar2.png',
                  '/assets/images/avatars/avatar3.png',
                  '/assets/images/avatars/avatar4.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                ]}
                image={'assets/images/nfts/Nft4.png'}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                name="Colorful Heaven"
                author="By Mark Benjamin"
                bidders={[
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar2.png',
                  '/assets/images/avatars/avatar3.png',
                  '/assets/images/avatars/avatar4.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                ]}
                image={'assets/images/nfts/Nft5.png'}
                currentbid="0.91 ETH"
                download="#"
              />
              <NFT
                name="3D Cubes Art"
                author="By Manny Gates"
                bidders={[
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar2.png',
                  '/assets/images/avatars/avatar3.png',
                  '/assets/images/avatars/avatar4.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                  '/assets/images/avatars/avatar1.png',
                ]}
                image={'assets/images/nfts/Nft6.png'}
                currentbid="0.91 ETH"
                download="#"
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
        >
          <Card px="0px" mb="20px">
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p="0px">
            <Flex
              align={{ sm: 'flex-start', lg: 'center' }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                History
              </Text>
              <Button variant="action">See all</Button>
            </Flex>

            <HistoryItem
              name="Colorful Heaven"
              author="By Mark Benjamin"
              date="30s ago"
              image={'assets/images/nfts/Nft5.png'}
              price="0.91 ETH"
            />
            <HistoryItem
              name="Abstract Colors"
              author="By Esthera Jackson"
              date="58s ago"
              image={'assets/images/nfts/Nft1.png'}
              price="0.91 ETH"
            />
            <HistoryItem
              name="ETH AI Brain"
              author="By Nick Wilson"
              date="1m ago"
              image={'assets/images/nfts/Nft2.png'}
              price="0.91 ETH"
            />
            <HistoryItem
              name="Swipe Circles"
              author="By Peter Will"
              date="1m ago"
              image={'assets/images/nfts/Nft4.png'}
              price="0.91 ETH"
            />
            <HistoryItem
              name="Mesh Gradients "
              author="By Will Smith"
              date="2m ago"
              image={'assets/images/nfts/Nft3.png'}
              price="0.91 ETH"
            />
            <HistoryItem
              name="3D Cubes Art"
              author="By Manny Gates"
              date="3m ago"
              image={'assets/images/nfts/Nft6.png'}
              price="0.91 ETH"
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
