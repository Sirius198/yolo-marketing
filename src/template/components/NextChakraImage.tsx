import { Box, BoxProps, chakra, ChakraProps } from '@chakra-ui/react';
import NextImage, { StaticImageData } from 'next/future/image';
import React from 'react';

type NextImageProps = Parameters<typeof NextImage>[0];

// export type NextChakraImageProps = Omit<ChakraProps, 'width' | 'height'> &
//   Omit<NextImageProps, 'width' | 'height'> & {
//     dimensions: [number, number];
//   };

// export type ImageProps = Omit<
//   BoxProps,
//   'position' | 'h' | 'w' | 'height' | 'width'
// > & {
//   height: string | number;
//   width: string | number;
//   src: string | StaticImageData;
//   quality?: number;
//   loading?: 'lazy' | 'eager';
//   priority?: boolean;
//   unoptimized?: boolean;
// };

export type NextChakraResponsiveImageProps = Omit<
  ChakraProps,
  'width' | 'height'
> &
  NextImageProps;

export const NextChakraResponsiveImage: React.FC<
  NextChakraResponsiveImageProps
> = ({
  src,
  quality,
  loading,
  priority,
  unoptimized,
  placeholder,
  blur,
  blurDataURL,
  alt,
  style,
  height = '100%',
  width = '100%',
  fill = true,
  ...props
}) => {
  return (
    <Box
      position="relative"
      height={height}
      width={width}
      overflow="hidden"
      {...props}
    >
      <NextImage
        alt={alt}
        src={src}
        fill={fill}
        style={{
          // objectFit="contain"
          objectFit: 'cover',
          ...style,
        }}
        // layout="fill"
        quality={quality}
        loading={loading}
        priority={priority}
        unoptimized={unoptimized}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
      />
    </Box>
  );
};

export const NextChakraImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'fill',
      'style',
      // 'layout',
      'priority',
      'placeholder',
      // 'blur',
      'blurDataURL',
    ].includes(prop),
});

// export default NextChakraImage;
