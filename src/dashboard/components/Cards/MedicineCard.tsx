import React from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';
import { TbRun } from 'react-icons/tb';

export interface MedicineCardProps
  extends Pick<BasicCardProps, 'primaryText'> {
  /** Fired when info button is clicked */
  onInfoClick: () => void;
  /** Icon to display on left hand side of card */
  icon: React.ReactNode;
}

export const defaultProps: MedicineCardProps = {
  onInfoClick: () => console.log('Info clicked'),
  primaryText: 'Running, Yoga, Back stretching',
  icon: <Icon as={TbRun} w="8" h="8" color="dashboard.tealMain" />,
};

export default function MedicineCard({
  onInfoClick,
  icon,
  ...rest
}: MedicineCardProps) {
  return (
    <BasicCard
      height="122px"
      padding="23px 44px 23px 34px"
      bgColor="white"
      shadow="none"
      leftAdornment={
        <Box display="flex" alignItems="center">
          {icon}
        </Box>
      }
      rightAdornment={
        <Button
          colorScheme="dashboardButton"
          width="102px"
          variant="outline"
          size="md"
          onClick={onInfoClick}
          ml={4}
        >
          Info
        </Button>
      }
      primaryTextOverrides={{ fontSize: '2xl', fontWeight: 'medium' }}
      {...rest}
    />
  );
}

MedicineCard.defaultProps = defaultProps;
