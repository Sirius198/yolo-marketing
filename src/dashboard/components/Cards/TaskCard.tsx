import React, { useState } from 'react';
import { IconButton, Text } from '@chakra-ui/react';
import BasicCard from './BasicCard';
import { CheckIcon } from '@chakra-ui/icons';

export interface TaskCardProps {
  /** Task time displayed on the left */
  time: string;

  /** The task description/text */
  task: string;

  /** Function to be fired when the tick is clicked */
  tickOnClick: () => void;
}

export const defaultProps: TaskCardProps = {
  time: '14:00',
  task: 'I am a description of the task. I can be short or can be expanded. I am also color coded with respect to the vertical.',
  tickOnClick: () => console.log('Tick on click'),
};

export default function TaskCard({
  time,
  task,
  tickOnClick,
}: TaskCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <BasicCard
      p="28px 36px 28px 32px"
      role="button"
      aria-expanded={expanded}
      height={expanded ? 'fit-content' : undefined}
      onClick={() => setExpanded(!expanded)}
      bgColor="dashboard.lightYellow"
      leftAdornment={
        <Text fontSize="2xl" fontWeight="medium" mr={4}>
          {time}
        </Text>
      }
      primaryText={task}
      primaryTextOverrides={{
        noOfLines: expanded ? undefined : 2,
        fontWeight: 'normal',
      }}
      rightAdornment={
        <IconButton
          ml="60px"
          color="dashboard.secondaryText"
          variant="ghostIcon"
          aria-label="Tick task"
          icon={<CheckIcon />}
          onClick={(e) => {
            e.stopPropagation();
            tickOnClick();
          }}
        />
      }
    />
  );
}

TaskCard.defaultProps = defaultProps;
