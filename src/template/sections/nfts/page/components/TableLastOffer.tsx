import React, { useMemo } from 'react';

// Chakra imports
import {
  Button,
  Flex,
  Link,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';

// React Table
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { FaEthereum } from 'react-icons/fa';
import { NextChakraLink } from 'src/template/components/links/links';
import { tableColumnsLastOffer } from '../variables/tableColumnsLastOffer';
import tableDataLastOffer from '../variables/tableDataLastOffer.json';

export type TopCreatorTableProps = {
  columnsData: any;
  tableData: any;
};

const defaultProps: TopCreatorTableProps = {
  columnsData: tableColumnsLastOffer,
  tableData: tableDataLastOffer,
};

function TopCreatorTable(props: TopCreatorTableProps) {
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

  const textColor = useColorModeValue('brandDark.700', 'white');
  const textColorLink = useColorModeValue('cyan.500', 'white');

  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex
          alignItems="center"
          justify="space-between"
          w="100%"
          px="22px"
          pb="8px"
          boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.12)"
        >
          <Text color={textColor} fontSize="xl" fontWeight="700">
            Latest Offers
          </Text>
          <Button variant="action">See all</Button>
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
                    if (cell.column.Header === 'Price') {
                      data = (
                        <Flex alignItems="center">
                          <Icon
                            color={textColor}
                            as={FaEthereum}
                            w="16px"
                            h="16px"
                            me="4px"
                          />
                          <Text
                            color={textColor}
                            fontSize="md"
                            fontWeight="700"
                          >
                            {cell.value[0]} ETH
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === 'USD Price') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'Expiration') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'From') {
                      data = (
                        <NextChakraLink href="/" w="max-content">
                          <Text
                            color={textColorLink}
                            fontSize="sm"
                            fontWeight="500"
                            w="max-content"
                          >
                            {cell.value}
                          </Text>
                        </NextChakraLink>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: '14px' }}
                        pb="10px"
                        minW={{
                          sm: '150px',
                          md: '200px',
                          lg: 'auto',
                          xl: '50px',
                        }}
                        maxW="100px"
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
      </Flex>
    </>
  );
}
TopCreatorTable.defaultProps = defaultProps;
export default TopCreatorTable;
