/* eslint-disable */
import {
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'src/template/components/card/Card';
import {
  AndroidLogo,
  AppleLogo,
  WindowsLogo,
} from 'src/template/components/icons/Icons';
import Menu from 'src/template/components/menu/MainMenu';
import React, { useMemo } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { columnsDataDevelopment } from '../variables/columnsData';
import tableDataDevelopment from '../variables/tableDataDevelopment.json';

export type DevelopmentTableProps = {
  columnsData: any;
  tableData: any;
};

const defaultProps: DevelopmentTableProps = {
  columnsData: columnsDataDevelopment,
  tableData: tableDataDevelopment,
};

export default function DevelopmentTable(props: DevelopmentTableProps) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance as any;
  initialState.pageSize = 11;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('secondaryGray.500', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex
        px="25px"
        justify="space-between"
        mb="20px"
        alignItems="center"
      >
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Check Table
        </Text>
        <Menu />
      </Flex>
      <Table
        {...getTableProps()}
        variant="simple"
        color="gray.500"
        mb="24px"
      >
        <Thead>
          {headerGroups.map((headerGroup: any, index: number) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column: any, index: number) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    alignItems="center"
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color="gray.400"
                  >
                    {column.render('Header')}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row: any, index: number) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell: any, index: number) => {
                  let data: string | React.ReactNode = '';
                  if (cell.column.Header === 'NAME') {
                    data = (
                      <Text
                        color={textColor}
                        fontSize="sm"
                        fontWeight="700"
                      >
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === 'TECH') {
                    data = (
                      <Flex alignItems="center">
                        {cell.value.map((item: any, key: number) => {
                          if (item === 'apple') {
                            return (
                              <AppleLogo
                                key={key}
                                color={iconColor}
                                me="16px"
                                h="18px"
                                w="15px"
                              />
                            );
                          } else if (item === 'android') {
                            return (
                              <AndroidLogo
                                key={key}
                                color={iconColor}
                                me="16px"
                                h="18px"
                                w="16px"
                              />
                            );
                          } else if (item === 'windows') {
                            return (
                              <WindowsLogo
                                key={key}
                                color={iconColor}
                                h="18px"
                                w="19px"
                              />
                            );
                          }
                        })}
                      </Flex>
                    );
                  } else if (cell.column.Header === 'DATE') {
                    data = (
                      <Text
                        color={textColor}
                        fontSize="sm"
                        fontWeight="700"
                      >
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === 'PROGRESS') {
                    data = (
                      <Flex alignItems="center">
                        <Text
                          me="10px"
                          color={textColor}
                          fontSize="sm"
                          fontWeight="700"
                        >
                          {cell.value}%
                        </Text>
                        <Progress
                          variant="table"
                          colorScheme="brandScheme"
                          h="8px"
                          w="63px"
                          value={cell.value}
                        />
                      </Flex>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: '14px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}

DevelopmentTable.defaultProps = defaultProps;
