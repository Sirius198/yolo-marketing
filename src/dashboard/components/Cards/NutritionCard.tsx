import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import BasicCard, { BasicCardProps } from './BasicCard';
import { IoNutrition } from 'react-icons/io5';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

export interface NutritionCardProps
  extends Pick<BasicCardProps, 'primaryText' | 'secondaryText'> {
  /** Icon to display on left hand side of card */
  leftIcon: React.ReactNode;
  /** Right icon */
  rightIcon: 'redCircleCross' | 'greenCircleCheck';
}

export const defaultProps: NutritionCardProps = {
  primaryText: 'Proteins, Carbs',
  secondaryText: 'Food name, Food name, Food name',
  leftIcon: (
    <Icon as={IoNutrition} w="8" h="8" color="dashboard.tealMain" />
  ),
  rightIcon: 'greenCircleCheck',
};

const iconContainer = (
  color: 'red.600' | 'green.600',
  icon: React.ReactNode
) => {
  return (
    <Box
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor={color}
      h={6}
      w={6}
    >
      {icon}
    </Box>
  );
};

const rightIconMap = {
  redCircleCross: iconContainer(
    'red.600',
    <CloseIcon boxSize={3} color="white" />
  ),
  greenCircleCheck: iconContainer(
    'green.600',
    <CheckIcon boxSize={3} color="white" />
  ),
};

export default function NutritionCard({
  leftIcon,
  rightIcon,
  ...rest
}: NutritionCardProps) {
  return (
    <BasicCard
      height="122px"
      padding="23px 44px 23px 34px"
      bgColor="white"
      shadow="none"
      leftAdornment={
        <Box mr={2} display="flex" alignItems="center">
          {leftIcon}
        </Box>
      }
      rightAdornment={rightIconMap[rightIcon]}
      primaryTextOverrides={{ fontSize: '2xl', fontWeight: 'medium' }}
      secondaryTextOverrides={{
        fontSize: '2xl',
        color: 'dashboard.secondaryText',
      }}
      {...rest}
    />
  );
}

NutritionCard.defaultProps = defaultProps;
