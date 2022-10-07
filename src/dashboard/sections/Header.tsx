import React from 'react';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export interface HeaderProps {
  /** If supplied a chevron will be displayed on the left, this prop is a function
   * that is called when the chevron is clicked
   */
  onChevronClick?: (() => void) | null;

  /** Text to display in header */
  text: string;

  /** Optional right sided adornment */
  rightAdornment?: React.ReactNode;
}

export const defaultProps: HeaderProps = {
  onChevronClick: () => console.log('clicked chevron'),
  text: 'A header',
};

export default function Header({
  onChevronClick,
  rightAdornment,
  text,
}: HeaderProps) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box
        display="flex"
        alignItems="center"
        ml={onChevronClick ? '-12px' : undefined}
      >
        {onChevronClick ? (
          <IconButton
            variant="ghostIcon"
            mr="2"
            aria-label="Go back"
            icon={<ChevronLeftIcon w={12} h={12} />}
            onClick={onChevronClick}
          />
        ) : null}
        <Text
          fontSize="2xl"
          fontWeight="medium"
          ml={onChevronClick ? '16px' : undefined}
        >
          {text}
        </Text>
      </Box>
      {rightAdornment}
    </Box>
  );
}

Header.defaultProps = defaultProps;
