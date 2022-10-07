// Chakra imports
import {
  Flex,
  FormControl,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'src/template/components/card/Card';
import SetUp from 'src/template/components/actions/SetUp';
import React from 'react';

export type ConnectedProps = { [x: string]: any };
const defaultProps: ConnectedProps = {};

export default function Connected(props: ConnectedProps) {
  const { ...rest } = props;
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue(
    'secondaryGray.400',
    'whiteAlpha.100'
  );
  // Chakra Color Mode
  return (
    <FormControl>
      <Card p="30px" {...rest}>
        <Flex justify="space-between" alignItems="center">
          <Text fontSize="2xl" color={textColorPrimary} fontWeight="bold">
            Connected
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ sm: 1, md: 1, xl: 1 }}
          spacing={{ base: '20px', xl: '0px' }}
        >
          <SetUp
            py="20px"
            borderBottom="1px solid"
            borderColor={borderColor}
            name="Google Account"
            value="Enabled"
            actionName="Edit"
          />
          <SetUp
            py="20px"
            borderBottom="1px solid"
            borderColor={borderColor}
            name="Twitter Account"
            value="Not configured"
            actionName="Set up"
          />
          <SetUp
            py="20px"
            borderBottom="1px solid"
            borderColor={borderColor}
            name="Instagram Account"
            value="Not configured"
            actionName="Set up"
          />
          <SetUp
            pt="20px"
            name="Facebook Account"
            value="Not configured"
            actionName="Add"
          />
        </SimpleGrid>
      </Card>
    </FormControl>
  );
}

Connected.defaultProps = defaultProps;
