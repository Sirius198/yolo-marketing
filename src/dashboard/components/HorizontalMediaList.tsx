import React from 'react';
import { Box, Image, ImageProps } from '@chakra-ui/react';

export interface MediaItem {
  /** Image source */
  src: string;
  /** Image alt text */
  alt: string;
  /** Image component props */
  imageProps?: ImageProps;
}
export interface HorizontalMediaListProps {
  /**
   * A list of media items to render
   */
  media: Array<MediaItem>;
}

export const defaultProps: HorizontalMediaListProps = {
  media: [
    { src: 'https://picsum.photos/90/90', alt: 'Some image alt' },
    { src: 'https://via.placeholder.com/90', alt: 'Some image alt' },
    { src: 'https://picsum.photos/90/90', alt: 'Some image alt' },
  ],
};

export default function HorizontalMediaList({
  media = [],
}: HorizontalMediaListProps) {
  return (
    <Box display="flex" width="100%" overflow="auto">
      {media.map(({ alt, ...rest }, idx) => {
        return (
          <Image
            key={`${idx}_${alt}`}
            h="90px"
            w="90px"
            borderRadius="8px"
            ml={idx > 0 ? '19px' : undefined}
            alt={alt}
            {...rest}
          />
        );
      })}
    </Box>
  );
}

HorizontalMediaList.defaultProps = defaultProps;
