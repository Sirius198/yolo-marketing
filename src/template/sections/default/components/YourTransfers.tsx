import React from 'react';

// Chakra imports
import { Button, Icon, Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import Transfer from 'src/template/components/dataDisplay/Transfer';

import { BsArrowRight } from 'react-icons/bs';

export type YourTransfersProps = { [x: string]: any };
const defaultProps: YourTransfersProps = {};

export default function YourTransfers(props: YourTransfersProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  return (
    <Card
      justifyContent="center"
      flexDirection="column"
      w="100%"
      mb={{ base: '20px', lg: '0px' }}
      pb="20px"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="lg"
        fontWeight="700"
        lineHeight="100%"
        mb="26px"
      >
        Your Transfers
      </Text>
      <Transfer
        mb="20px"
        name="From Alex Manda"
        date="Today, 16:36"
        sum="+$50"
        avatar="assets/images/avatars/avatar1.png"
      />
      <Transfer
        mb="20px"
        name="To Laura Santos"
        date="Today, 08:49"
        sum="-$27"
        avatar="/assets/images/avatars/avatar2.png"
      />
      <Transfer
        mb="20px"
        name="From Jadon S."
        date="Yesterday, 14:36"
        sum="+$157"
        avatar="/assets/images/avatars/avatar3.png"
      />
      <Transfer
        mb="20px"
        name="From Esthera J."
        date="Yesterday, 09:42"
        sum="+$92"
        avatar="/assets/images/avatars/avatar4.png"
      />

      <Button
        p="0px"
        ms="auto"
        variant="no-hover"
        bg="transparent"
        my={{ sm: '1.5rem', lg: '0px' }}
      >
        <Text
          fontSize="sm"
          color={brandColor}
          fontWeight="bold"
          cursor="pointer"
          transition="all .3s ease"
          my={{ sm: '1.5rem', lg: '0px' }}
          _hover={{ me: '4px' }}
        >
          View all
        </Text>
        <Icon
          as={BsArrowRight}
          w="18px"
          h="18px"
          color={brandColor}
          transition="all .3s ease"
          ms=".3rem"
          cursor="pointer"
          _hover={{ transform: 'translate(4px)' }}
        />
      </Button>
    </Card>
  );
}

YourTransfers.defaultProps = defaultProps;
