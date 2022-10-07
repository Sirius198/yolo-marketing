import React from 'react';
import { Box, Image, Text, Radio } from '@chakra-ui/react';

export interface PaymentRadioProps {
  /** Logo image source */
  src: string;
  /** Payment method text */
  text: string;
  /** If true appears as checked */
  isChecked: boolean;
  /** Fired when clicked */
  onChange: () => void;
}

export const defaultProps: PaymentRadioProps = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1600px-MasterCard_early_1990s_logo.svg.png?20161110182502',
  text: 'Mastercard',
  isChecked: true,
  onChange: () => console.log,
};

export default function PaymentRadio({
  src,
  text,
  isChecked,
  onChange,
  ...rest
}: PaymentRadioProps) {
  return (
    <Box
      height="64px"
      width="396px"
      minWidth="280px"
      maxWidth="45%"
      bgColor="dashboard.lightTeal"
      p="18px 32px"
      display="flex"
      alignItems="center"
      borderRadius="137px"
      sx={{ '.chakra-radio__control': { w: '30px', h: '30px' } }}
      {...rest}
    >
      <Image
        src={src}
        alt={`Logo for ${text}`}
        mr="30px"
        width="40px"
        height="40px"
        objectFit="contain"
      />
      <Text fontSize="xl" color="dashboard.primaryText">
        {text}
      </Text>
      <Radio
        ml="auto"
        isChecked={isChecked}
        onChange={onChange}
        size="lg"
        border="0.5px solid"
        borderColor="dashboard.secondaryText"
        _checked={{
          borderColor: 'dashboard.tealMain',
          bgColor: 'dashboard.tealMain',
        }}
      />
    </Box>
  );
}

PaymentRadio.defaultProps = defaultProps;
