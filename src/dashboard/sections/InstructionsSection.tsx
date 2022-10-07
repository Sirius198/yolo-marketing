import React from 'react';
import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { BsFilePdf, BsFilePdfFill } from 'react-icons/bs';
import BasicCard from '../components/Cards/BasicCard';

export interface InstructionsSectionProps {
  text: string;
  pdfs?: Array<{ uid: string; name: string; href: string }>;
}

export const defaultProps: InstructionsSectionProps = {
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry.simply dummy text of the printing and typesetting industry.',
};

export default function InstructionsSection({
  text,
  pdfs = [
    { uid: 'first-uid', name: `Dos and Dont's`, href: './' },
    { uid: 'second-uid', name: 'Risks and concerns', href: './' },
  ],
}: InstructionsSectionProps) {
  return (
    <Box width="100%" p="44px" bgColor="dashboard.lightYellow">
      <Text fontSize="3xl" fontWeight="semibold" mb="20px">
        Instructions
      </Text>
      <Text fontSize="xl" mb="40px">
        {text}
      </Text>
      {pdfs.map(({ uid, name, href }, idx) => {
        return (
          <BasicCard
            p="0"
            mt={idx > 0 ? '40px' : undefined}
            key={uid}
            shadow="none"
            height="fit-content"
            mb={2}
            leftAdornment={<Icon as={BsFilePdf} w="8" h="8" />}
            leftAdornmentBoxOverrides={{ display: 'flex' }}
            primaryText={name}
            primaryTextOverrides={{ fontSize: '2xl' }}
            rightAdornment={
              <a href={href} download>
                <Button
                  colorScheme="dashboardButton"
                  variant="outline"
                  size="lg"
                >
                  Download
                </Button>
              </a>
            }
          />
        );
      })}
    </Box>
  );
}

InstructionsSection.defaultProps = defaultProps;
