import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Header from './Header';

export interface PrescriptionPaneProps {
  /** Function that is called when the chevron is clicked */
  onChevronClick: () => void;

  /** Pane heading text */
  headingText: string;

  /** The body of the prescription pane */
  children: React.ReactNode;
}

export const defaultProps: PrescriptionPaneProps = {
  headingText: 'Medication Details',
  onChevronClick: () => console.log('Chevron click'),
  children: (
    <>
      <Text fontSize="2xl">Bupropion Naltrexone</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum
        is simply dummy text of the printing and typesetting
        industry.simply dummy text of the printing and typesetting
        industry.. Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit, sed diam no laoreet dolore magna. Lorem Ipsum is simply dummy
        text of the printing andsimply dummy text of the printing Lorem
        ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum
        is simply dummy text of the printing and typesetting
        industry.simply dummy text of the printing and typesetting
        industry. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
        Lorem Ipsum is simply dummy text of the printing and pesetting
        industry.
      </Text>
    </>
  ),
};

export default function PrescriptionPane({
  headingText,
  onChevronClick,
  children,
}: PrescriptionPaneProps) {
  return (
    <Box width="100%" p="105px 149px 45px 78px" pt={20} bgColor="teal.50">
      <Header onChevronClick={onChevronClick} text={headingText} />
      <Box mt="80px" />
      {children}
    </Box>
  );
}

PrescriptionPane.defaultProps = defaultProps;
