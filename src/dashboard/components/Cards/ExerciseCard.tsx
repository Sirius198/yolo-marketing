import React from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';
import { TbPill } from 'react-icons/tb';

export interface ExerciseCardProps
  extends Pick<BasicCardProps, 'primaryText' | 'secondaryText'> {
  /** Fired when info button is clicked */
  onInfoClick: () => void;
  /** Icon to display on left hand side of card */
  icon: React.ReactNode;
}

export const defaultProps: ExerciseCardProps = {
  primaryText: 'Bupropion Naltrexone',
  secondaryText: '2 tablets ( Morn, Even ), 5 Days',
  onInfoClick: () => console.log('Info clicked'),
  icon: <Icon as={TbPill} w="8" h="8" color="dashboard.tealMain" />,
};

export default function ExerciseCard({
  icon,
  onInfoClick,
  ...rest
}: ExerciseCardProps) {
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
          size="sm"
          onClick={onInfoClick}
          ml={4}
        >
          Info
        </Button>
      }
      primaryTextOverrides={{ fontSize: '2xl', fontWeight: 'medium' }}
      secondaryTextOverrides={{
        fontSize: '2xl',
        color: 'dashboard.secondaryText',
      }}
      {...rest}
    />
  );
}

ExerciseCard.defaultProps = defaultProps;
