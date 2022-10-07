import React from 'react';

// Chakra imports
import {
  Flex,
  Box,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import LineChart from 'src/template/components/charts/LineChart';

// Custom components
import Card from 'src/template/components/card/Card';
import Menu from 'src/template/components/menu/MainMenu';
import IconBox from 'src/template/components/icons/IconBox';

import {
  lineChartDataProjectStatus,
  lineChartOptionsProjectStatus,
} from 'src/lib/variables/charts';

// Assets
import { MdOutlineShoppingBasket } from 'react-icons/md';

export type ProjectStatusProps = { [x: string]: any };
const defaultProps: ProjectStatusProps = {};

export default function ProjectStatus(props: ProjectStatusProps) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const iconBoxBg = useColorModeValue(
    'secondaryGray.300',
    'brandDark.700'
  );
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Flex
        justify="space-between"
        px="10px"
        pt="5px"
        mb="20px"
        alignItems="center"
        w={'100%'}
      >
        <Text
          color={textColor}
          fontSize="lg"
          fontWeight="700"
          lineHeight="100%"
        >
          Project Status
        </Text>
        <Menu />
      </Flex>
      <Flex justifyContent="center" alignItems="center" w="100%" px="10px">
        <IconBox
          h="42px"
          w="42px"
          bg={iconBoxBg}
          me="20px"
          icon={
            <Icon
              color={iconColor}
              as={MdOutlineShoppingBasket}
              h="24px"
              w="24px"
            />
          }
        />
        <Flex flexDirection="column" alignItems="start" me="auto">
          <Text color={textColor} fontSize="lg" me="6px" fontWeight="700">
            eCommerce
          </Text>
          <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
            UI Design
          </Text>
        </Flex>
        <Flex alignItems="end">
          <Text
            lineHeight="100%"
            ms="auto"
            color={textColor}
            fontSize="2xl"
            fontWeight="700"
          >
            71
          </Text>
          <Text
            ms="auto"
            lineHeight="100%"
            color={textColor}
            fontSize="sm"
            fontWeight="700"
          >
            %
          </Text>
        </Flex>
      </Flex>
      <Box minH="250px" mt="auto">
        <LineChart
          chartData={lineChartDataProjectStatus}
          chartOptions={lineChartOptionsProjectStatus}
        />
      </Box>
    </Card>
  );
}

ProjectStatus.defaultProps = defaultProps;
