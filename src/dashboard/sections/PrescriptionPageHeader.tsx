import React from 'react';
import { Button, IconButton } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from '../components/Cards/BasicCard';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export interface PrescriptionPageHeaderProps
  extends Pick<BasicCardProps, 'primaryText' | 'secondaryText'> {
  /** The download button onClick function */
  downloadOnClick: () => void;
  /** The chevron icon button onClick function */
  onChevronClick: () => void;
}

export const defaultProps: PrescriptionPageHeaderProps = {
  primaryText: 'Prescription Title',
  secondaryText: 'Prescribed 24 June 2022',
  downloadOnClick: () => console.log('download clicked'),
  onChevronClick: () => console.log('chevron clicked'),
};

export default function PrescriptionPageHeader({
  downloadOnClick,
  onChevronClick,
  ...rest
}: PrescriptionPageHeaderProps) {
  return (
    <BasicCard
      width="fit-content"
      height="fit-content"
      shadow="none"
      p={0}
      leftAdornment={
        <IconButton
          variant="ghostIcon"
          aria-label="Go back"
          icon={
            <ChevronLeftIcon w={12} h={12} color="dashboard.tealMain" />
          }
          onClick={onChevronClick}
        />
      }
      rightAdornment={
        <Button
          colorScheme="dashboardButton"
          variant="outline"
          size="md"
          onClick={downloadOnClick}
          ml="46px"
        >
          Download as pdf
        </Button>
      }
      primaryTextOverrides={{ fontSize: '3xl', fontWeight: 'semibold' }}
      secondaryTextOverrides={{
        fontSize: '2xl',
        color: 'dashboard.secondaryText',
      }}
      {...rest}
    />
  );
}

PrescriptionPageHeader.defaultProps = defaultProps;
