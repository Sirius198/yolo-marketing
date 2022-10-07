import React from 'react';

// Chakra imports
import { Flex, Text, Avatar, useColorModeValue } from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';

export type ProfileProps = { [x: string]: any };
const defaultProps: ProfileProps = {};

export default function Profile(props: ProfileProps) {
  const { ...rest } = props;
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  // Chakra Color Mode
  return (
    <Card mb="20px" {...rest}>
      <Flex alignItems="center">
        <Avatar
          src="/assets/images/avatars/avatar4.png"
          h="87px"
          w="87px"
          me="20px"
        />
        <Flex flexDirection="column">
          <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl">
            Adela Parkson
          </Text>
          <Text mt="1px" color={textColorSecondary} fontSize="md">
            adela@yolohealth.app
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}

Profile.defaultProps = defaultProps;
