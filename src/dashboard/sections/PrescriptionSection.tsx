import React from 'react';
import { Box, Icon, Text, VStack } from '@chakra-ui/react';
import MedicineCard, {
  MedicineCardProps,
} from '../components/Cards/MedicineCard';
import ExerciseCard, {
  ExerciseCardProps,
} from '../components/Cards/ExerciseCard';
import NutritionCard, {
  NutritionCardProps,
} from '../components/Cards/NutritionCard';
import { TbPill, TbRun } from 'react-icons/tb';
import { IoNutrition } from 'react-icons/io5';

export interface PrescriptionSectionProps {
  /** Fired when info button is clicked */
  onInfoClick: (uid: string) => void;
  /** List of medication */
  medication: Array<
    { uid: string } & Omit<MedicineCardProps, 'onInfoClick'>
  >;
  /** List of nutrition */
  nutrition: Array<{ uid: string } & NutritionCardProps>;
  /** List of exercise */
  exercise: Array<
    { uid: string } & Omit<ExerciseCardProps, 'onInfoClick'>
  >;
}

export const defaultProps: PrescriptionSectionProps = {
  onInfoClick: console.log,
  medication: [
    {
      uid: 'medication-1',
      primaryText: 'Running, Yoga, Back stretching',
      icon: <Icon as={TbRun} w="8" h="8" color="dashboard.tealMain" />,
    },
  ],
  nutrition: [
    {
      uid: 'nutrition-1',
      primaryText: 'Proteins, Carbs',
      secondaryText: 'Food name, Food name, Food name',
      leftIcon: (
        <Icon as={IoNutrition} w="8" h="8" color="dashboard.tealMain" />
      ),
      rightIcon: 'greenCircleCheck',
    },
  ],
  exercise: [
    {
      uid: 'exercise-1',
      primaryText: 'Bupropion Naltrexone',
      secondaryText: '2 tablets ( Morn, Even ), 5 Days',
      icon: <Icon as={TbPill} w="8" h="8" color="dashboard.tealMain" />,
    },
  ],
};

export default function PrescriptionSection({
  onInfoClick,
  medication,
  nutrition,
  exercise,
}: PrescriptionSectionProps) {
  return (
    <Box width="100%" p="36px 47px" bgColor="teal.50">
      <Text fontSize="2xl" fontWeight="medium" mb="28px">
        Medication
      </Text>
      <VStack spacing="20px" width="100%" mb="56px">
        {medication.map((medicationItem) => {
          return (
            <MedicineCard
              key={medicationItem.uid}
              onInfoClick={() => onInfoClick(medicationItem.uid)}
              {...medicationItem}
            />
          );
        })}
      </VStack>

      <Text fontSize="2xl" fontWeight="medium" mb="28px">
        Nutrition
      </Text>
      <VStack spacing="20px" width="100%" mb="56px">
        {nutrition.map((nutritionItem) => {
          return (
            <NutritionCard key={nutritionItem.uid} {...nutritionItem} />
          );
        })}
      </VStack>

      <Text fontSize="2xl" fontWeight="medium" mb="28px">
        Exercise
      </Text>
      <VStack spacing="20px" width="100%">
        {exercise.map((exerciseItem) => {
          return (
            <ExerciseCard
              key={exerciseItem.uid}
              onInfoClick={() => onInfoClick(exerciseItem.uid)}
              {...exerciseItem}
            />
          );
        })}
      </VStack>
    </Box>
  );
}

PrescriptionSection.defaultProps = defaultProps;
