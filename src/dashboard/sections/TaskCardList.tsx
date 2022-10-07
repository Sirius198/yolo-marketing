import React, { useState } from 'react';
import { Button, Box, VStack } from '@chakra-ui/react';
import TaskCard, { TaskCardProps } from '../components/Cards/TaskCard';

export interface TaskCardListProps {
  /** List of tasks to render */
  tasks: Array<TaskCardProps & { key: string }>;
}

export const defaultProps: TaskCardListProps = {
  tasks: [
    {
      key: 'some-uid',
      time: '14:00',
      task: 'I am a description of the task. I can be short or can be expanded. I am also color coded with respect to the vertical.',
      tickOnClick: () => console.log('Tick on click'),
    },
    {
      key: 'another-uid',
      time: '15:00',
      task: 'I am a description of the task. I can be short or can be expanded. I am also color coded with respect to the vertical.',
      tickOnClick: () => console.log('Tick on click'),
    },
    {
      key: 'final-uid',
      time: '16:00',
      task: 'I am a description of the task. I can be short or can be expanded. I am also color coded with respect to the vertical.',
      tickOnClick: () => console.log('Tick on click'),
    },
  ],
};

export default function TaskCardList({ tasks = [] }: TaskCardListProps) {
  const isExpandable = tasks.length > 2;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VStack spacing="16px" width="100%">
      {tasks
        .slice(0, isExpanded ? tasks.length : 2)
        .map(({ key, ...taskCardProps }) => {
          return <TaskCard key={key} {...taskCardProps} />;
        })}
      {isExpandable ? (
        <Box>
          <Button
            colorScheme="dashboardButton"
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            mx="auto"
            mt="12px"
          >
            {isExpanded ? 'See less' : 'See more'}
          </Button>
        </Box>
      ) : null}
    </VStack>
  );
}

TaskCardList.defaultProps = defaultProps;
