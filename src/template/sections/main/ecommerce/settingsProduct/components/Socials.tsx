// Chakra imports
import {
  Flex,
  FormControl,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';
import InputField from 'src/template/components/fields/InputField';
import React from 'react';

export type SocialsProps = { [x: string]: any };
const defaultProps: SocialsProps = {};

export default function Socials(props: SocialsProps) {
  const { ...rest } = props;
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  // Chakra Color Mode
  return (
    <FormControl>
      <Card mb="20px" {...rest}>
        <Flex flexDirection="column" mb="30px" ms="10px">
          <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
            Social Profiles
          </Text>
          <Text fontSize="md" color={textColorSecondary}>
            Here you can set product social profiles
          </Text>
        </Flex>
        <InputField
          mb="25px"
          id="twitter_username"
          label="Twitter Username"
          placeholder="Twitter Username"
        />
        <InputField
          mb="25px"
          id="facebook_username"
          label="Facebook Username"
          placeholder="Facebook Username"
        />
        <InputField
          mb="25px"
          id="github_username"
          label="Github Username"
          placeholder="Github Username"
        />
        <InputField
          mb="25px"
          id="dribbble_username"
          label="Dribbble Username"
          placeholder="Dribbble Username"
        />
      </Card>
    </FormControl>
  );
}

Socials.defaultProps = defaultProps;
