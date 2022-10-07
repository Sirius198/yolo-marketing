import React from 'react';
import { Box, Button } from '@chakra-ui/react';

type Chips = 'hairFall' | 'backPain' | 'weightLoss';
export interface AppointmentListHeaderProps {
  /** The new appointment button onClick function */
  newAppointmentOnClick: () => void;

  /** An array of checked chips, each checked chip is styled differently than an unchecked one */
  checkedChips: Array<Chips>;

  /** Function to fire when a chip is clicked, provides the chip name as a parameter */
  chipOnClick: (chip: Chips) => void;
}

export const defaultProps: AppointmentListHeaderProps = {
  newAppointmentOnClick: () => console.log('clicked new appointment'),
  checkedChips: ['hairFall'],
  chipOnClick: console.log,
};

export default function AppointmentListHeader({
  newAppointmentOnClick,
  checkedChips,
  chipOnClick,
}: AppointmentListHeaderProps) {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        colorScheme="dashboardButton"
        variant="outline"
        size="md"
        onClick={newAppointmentOnClick}
      >
        New appointment
      </Button>
      <Box display="flex" alignItems="center">
        <Button
          bgColor="dashboard.lightGreen"
          color={
            checkedChips.includes('hairFall')
              ? 'dashboard.primaryText'
              : 'dashboard.secondaryText'
          }
          size="sm"
          onClick={() => chipOnClick('hairFall')}
          aria-selected={checkedChips.includes('hairFall')}
        >
          Hair Fall
        </Button>
        <Button
          bgColor="dashboard.lightYellow"
          color={
            checkedChips.includes('backPain')
              ? 'dashboard.primaryText'
              : 'dashboard.secondaryText'
          }
          size="sm"
          onClick={() => chipOnClick('backPain')}
          ml="13px"
          aria-selected={checkedChips.includes('backPain')}
        >
          Back Pain
        </Button>
        <Button
          bgColor="dashboard.lightRed"
          color={
            checkedChips.includes('weightLoss')
              ? 'dashboard.primaryText'
              : 'dashboard.secondaryText'
          }
          size="sm"
          onClick={() => chipOnClick('weightLoss')}
          ml="13px"
          aria-selected={checkedChips.includes('weightLoss')}
        >
          Weight Loss
        </Button>
      </Box>
    </Box>
  );
}

AppointmentListHeader.defaultProps = defaultProps;
