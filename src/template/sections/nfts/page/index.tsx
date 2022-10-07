import React from 'react';

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

// Custom components
import Banner from './components/Banner';
import TableLastOffer from './components/TableLastOffer';
import Auction from './components/Auction';
import Description from './components/Description';
import NFT from 'src/template/components/card/NFT';
import Card from 'src/template/components/card/Card';

import tableDataLastOffer from './variables/tableDataLastOffer.json';
import { tableColumnsLastOffer } from './variables/tableColumnsLastOffer';

export type DefaultProps = {};

export default function Page() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  // Chakra Color Mode
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        maxW="100%"
        gridTemplateColumns={{
          base: '1fr',
          lg: '1fr 1fr',
          '2xl': '1fr 0.95fr',
        }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', lg: 'grid' }}
      >
        <Flex flexDirection="column" gridArea="1 / 1 / 2 / 2">
          <Banner image="/assets/images/nfts/NftLarge1.png" />
          <Description
            desc="The Abstractus® project is an online art show and the First Art NFTs on Ethereum, launched on May 9, 2017. Abstractus® features 28 unique series of cards from 7 different artists. Abstractus® are referenced with CryptoAbstractus® and Crypto in the original ERC-721 Non-Fungible Token Standard, and pre-dates them both. Join the Abstractus® Discord and check out theAbstractus® Docs to find out more."
            creator="yolohealth.app"
          />
        </Flex>
        <Flex flexDirection="column" gridArea="1 / 2 / 2 / 3" pt="60px">
          <Auction
            name="Color Abstractus®"
            creator="YoloHealth"
            creatorAvatar="/assets/images/avatars/avatarYoloHealth.png"
            price="3.87 ETH"
            bid={2.82}
          />
          <Card px="0px" mb="20px" mt="66px">
            <TableLastOffer
              tableData={tableDataLastOffer}
              columnsData={tableColumnsLastOffer}
            />
          </Card>
        </Flex>
      </Grid>
      <Text
        mt="25px"
        mb="36px"
        color={textColor}
        fontSize="2xl"
        ms="24px"
        fontWeight="700"
      >
        More from this Collection
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
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
      </SimpleGrid>

      {/* Delete Product */}
    </Box>
  );
}
