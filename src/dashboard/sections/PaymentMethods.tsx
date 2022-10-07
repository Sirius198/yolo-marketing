import React from 'react';
import { Box, IconButton, Image, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface PaymentMethod {
  uid: string;
  logoSrc: string;
  title: string;
  maskedNumber: string;
  rightText: string;
}

export interface PaymentMethodsProps {
  paymentMethods: Array<PaymentMethod>;
  onDeleteClick: (uid: string) => void;
}

export const defaultProps: PaymentMethodsProps = {
  onDeleteClick: console.log,
  paymentMethods: [
    {
      uid: 'uid-1',
      logoSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1600px-MasterCard_early_1990s_logo.svg.png?20161110182502',
      title: 'Master Card',
      maskedNumber: '****    ****    ****    1234',
      rightText: 'Added on 12/07/2022',
    },
  ],
};

export default function PaymentMethods({
  paymentMethods = [],
  onDeleteClick,
}: PaymentMethodsProps) {
  return (
    <Box p="32px" w="100%">
      <Text fontSize="2xl" fontWeight="medium" mb="35px">
        Your Payment Methods
      </Text>
      {paymentMethods.map(
        ({ uid, logoSrc, title, maskedNumber, rightText }, idx) => {
          return (
            <Box
              key={uid}
              display="flex"
              justifyContent="space-between"
              mt={idx > 0 ? '40px' : undefined}
              width="100%"
            >
              <Box display="flex" alignItems="center">
                <Image
                  src={logoSrc}
                  alt={`Logo for ${title}`}
                  mr="50px"
                  width="40px"
                  height="40px"
                  objectFit="contain"
                />
                <Box>
                  <Text
                    fontSize="md"
                    fontWeight="normal"
                    color="dashboard.secondaryText"
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight="medium"
                    color="dashboard.primarytext"
                  >
                    {maskedNumber}
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <Text
                  fontSize="md"
                  fontWeight="normal"
                  color="dashboard.secondaryText"
                  noOfLines={1}
                >
                  {rightText}
                </Text>
                <IconButton
                  ml="54px"
                  variant="ghostIcon"
                  aria-label={`Delete ${title} ${maskedNumber}`}
                  icon={
                    <DeleteIcon
                      w={8}
                      h={8}
                      color="dashboard.secondaryText"
                    />
                  }
                  onClick={() => onDeleteClick(uid)}
                />
              </Box>
            </Box>
          );
        }
      )}
    </Box>
  );
}

PaymentMethods.defaultProps = defaultProps;
