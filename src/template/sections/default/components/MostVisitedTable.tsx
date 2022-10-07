import {
  Icon,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Button,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import Card from 'src/template/components/card/Card';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { tableColumnsMostVisited } from '../variables/tableColumnsMostVisited';
import tableDataMostVisited from '../variables/tableDataMostVisited.json';

export type MostVisitedTableProps = {
  columnsData: {
    Header: string;
    accessor: string;
  }[];
  tableData: {
    [x: string]: string;
  }[];
};

const defaultProps: MostVisitedTableProps = {
  columnsData: tableColumnsMostVisited,
  tableData: tableDataMostVisited,
};

function MostVisitedTable(props: MostVisitedTableProps) {
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
  } = tableInstance as any;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = useColorModeValue(
    'secondaryGray.600',
    'white'
  );
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <Card mb={{ base: '20px', xl: '0px' }}>
      <Flex
        flexDirection="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex
          alignItems="center"
          justify="space-between"
          w="100%"
          px="10px"
          mb="20px"
        >
          <Text
            color={textColor}
            fontSize="lg"
            fontWeight="700"
            lineHeight="100%"
          >
            Most Visited Pages
          </Text>
          <Button
            bg={boxBg}
            fontSize="sm"
            fontWeight="500"
            color={textColorSecondary}
            borderRadius="7px"
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me="4px"
            />
            This month
          </Button>
        </Flex>
        <Table {...getTableProps()} variant="simple" color="gray.500">
          <Thead>
            {headerGroups.map((headerGroup: any, index: number) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column: any, index: number) => (
                  <Th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps()
                    )}
                    pe="10px"
                    key={index}
                    borderColor="transparent"
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
                    if (cell.column.Header === 'Page Name') {
                      data = (
                        <Flex alignItems="center">
                          <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="600"
                          >
                            {cell.value}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === 'Visitors') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="600"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'Unique Visitors') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="600"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'Clients') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="600"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'Bounce Rate') {
                      data = (
                        <Text
                          color={
                            cell.value[0] === '-' ? 'green.500' : 'red.500'
                          }
                          fontSize="sm"
                          fontWeight="600"
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
                        mt="20px !important"
                        py="10px !important"
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
      </Flex>
    </Card>
  );
}

MostVisitedTable.defaultProps = defaultProps;

export default MostVisitedTable;
