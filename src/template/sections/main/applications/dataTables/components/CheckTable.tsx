import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  styled,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import './CheckTable.css';

// Custom components
import Card from 'src/template/components/card/Card';
import Menu from 'src/template/components/menu/MainMenu';
import { columnsDataCheck } from '../variables/columnsData';
import tableDataCheck from '../variables/tableDataCheck.json';

export type CheckTableProps = {
  columnsData: any;
  tableData: any;
};

const defaultProps: CheckTableProps = {
  columnsData: columnsDataCheck,
  tableData: tableDataCheck,
};

export default function CheckTable(props: CheckTableProps) {
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
          Development Table
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
                      <Flex alignItems="center">
                        <MyCheckBox
                          defaultChecked={cell.value[1]}
                          colorScheme="brandScheme"
                          me="10px"
                        />
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="700"
                        >
                          {cell.value[0]}
                        </Text>
                      </Flex>
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
                      </Flex>
                    );
                  } else if (cell.column.Header === 'QUANTITY') {
                    data = (
                      <Text
                        color={textColor}
                        fontSize="sm"
                        fontWeight="700"
                      >
                        {cell.value}
                      </Text>
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

const MyCheckBox = styled(Checkbox, {
  borderColor: 'yellow',
  '& .chakra-checkbox__control': {
    borderColor: 'blue !important',
  },
  backgroundColor: 'blue',
});

CheckTable.defaultProps = defaultProps;
