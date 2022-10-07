// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'src/template/components/card/Card';
import React from 'react';
import Project from './Project';

export type ProjectsProps = { [x: string]: any };
const defaultProps: ProjectsProps = {};

export default function Projects(props: ProjectsProps) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  return (
    <Card mb={{ base: '0px', '2xl': '20px' }}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        All projects
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </Text>
      <Project
        mb="20px"
        image={'assets/images/users/Project1.png'}
        ranking="1"
        link="#"
        title="Technology behind the Blockchain"
      />
      <Project
        mb="20px"
        image={'assets/images/users/Project2.png'}
        ranking="2"
        link="#"
        title="Greatest way to a good Economy"
      />
      <Project
        image={'assets/images/users/Project3.png'}
        ranking="3"
        link="#"
        title="Most essential tips for Burnout"
      />
    </Card>
  );
}

Projects.defaultProps = defaultProps;
