import React from 'react';
import { Box, BoxProps, Text, TextProps } from '@chakra-ui/react';

export interface BasicCardProps extends BoxProps {
  /** The primary text to be displayed */
  primaryText?: string;

  /** Primary text props override, enabling font size and color changes
  etc */
  primaryTextOverrides?: TextProps;

  /** Secondary text, displayed below the primary */
  secondaryText?: string;

  /** Secondary text props override, enabling font size and color changes
  etc */
  secondaryTextOverrides?: TextProps;

  /** A react node positioned on the left of the card, for example
  a user avatar */
  leftAdornment?: React.ReactNode;

  /** A react node floated to the right of the card, for example a
  button/group of buttons */
  rightAdornment?: React.ReactNode;

  /** Overrides for the right adornment box */
  rightAdornmentBoxOverrides?: BoxProps;

  /** Overrides for the left adornment box */
  leftAdornmentBoxOverrides?: BoxProps;

  /** A hex color or Chakra color string */
  bgColor?: string;

  /** Children will be inserted below the secondary text */
  children?: React.ReactNode;
}

/** A simple card component, can be used to compose more specific cards */
export default function BasicCard({
  leftAdornment,
  rightAdornment,
  primaryText,
  primaryTextOverrides,
  secondaryText,
  secondaryTextOverrides,
  bgColor,
  rightAdornmentBoxOverrides,
  leftAdornmentBoxOverrides,
  children,
  ...boxProps
}: BasicCardProps) {
  return (
    <Box
      borderRadius="8px"
      width="100%"
      height={118}
      px="33px"
      py="22px"
      shadow="sm"
      bgColor={bgColor}
      display="flex"
      alignItems="center"
      {...boxProps}
    >
      {leftAdornment ? (
        <Box pr="34px" my="auto" {...leftAdornmentBoxOverrides}>
          {leftAdornment}
        </Box>
      ) : null}
      <Box>
        <Text
          fontSize="xl"
          fontWeight="medium"
          noOfLines={1}
          color="dashboard.primaryText"
          {...primaryTextOverrides}
        >
          {primaryText}
        </Text>
        <Text
          fontSize="xl"
          fontWeight="normal"
          noOfLines={1}
          color="dashboard.primaryText"
          {...secondaryTextOverrides}
        >
          {secondaryText}
        </Text>
        {children}
      </Box>
      {rightAdornment ? (
        <Box
          ml="auto"
          height="100%"
          display="flex"
          alignItems="center"
          {...rightAdornmentBoxOverrides}
        >
          {rightAdornment}
        </Box>
      ) : null}
    </Box>
  );
}
