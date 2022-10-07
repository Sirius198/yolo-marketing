import React from 'react';
import { Box, Image, Link, LinkOverlay, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export interface ChatLinkPreviewProps {
  /** Link preview title */
  title: string;

  /** Link preview subtitle */
  subtitle: string;

  /** Link href */
  href: string;

  /** Link text, if this is not supplied the href will be displayed */
  linkText?: string;

  /** Link preview image */
  imgSrc?: string;
}

export const defaultProps: ChatLinkPreviewProps = {
  title: 'A Patient’s Guide to Telemedicine',
  subtitle:
    'Telemedicine allows patients to have a remote, non-emergency office visit with their health care provider by using a smartphone, computer or tablet.',
  href: 'https://www.drugwatch.com/health/telemedicine-patients-guide/',
  linkText: 'drugwatch.com',
  imgSrc:
    'https://www.drugwatch.com/wp-content/uploads/Intro-7-720x0-c-default.webp',
};

export default function ChatLinkPreview({
  title,
  subtitle,
  imgSrc,
  href,
  linkText,
}: ChatLinkPreviewProps) {
  return (
    <Box
      height="112px"
      maxWidth="75%"
      shadow="sm"
      borderColor="gray.100"
      borderRadius="10px"
      display="flex"
    >
      <Image
        borderRadius="10px 0px 0px 10px"
        width="25%"
        alt="Link preview image"
        src={imgSrc}
        objectFit="cover"
      />
      <Box p={2} px={4}>
        <Text fontSize="xl" fontWeight="medium" noOfLines={1}>
          {title}
        </Text>
        <Text fontSize="xl" fontWeight="normal" noOfLines={1}>
          {subtitle}
        </Text>
        <Link href={href} isExternal>
          <ExternalLinkIcon mr={1} /> {linkText || href}
        </Link>
      </Box>
    </Box>
  );
}

ChatLinkPreview.defaultProps = defaultProps;
