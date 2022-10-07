import {
  Avatar,
  Button,
  Flex,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchBar } from 'src/layouts/SearchBar';
import React, { useMemo } from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { columnsDataUsersOverview } from '../variables/columnsDataUsersOverview';
import tableDataUsersOverview from '../variables/tableDataUsersOverview.json';

export type SearchTableUsersOverviewProps = {
  columnsData: any;
  tableData: any;
};

const defaultProps: SearchTableUsersOverviewProps = {
  columnsData: columnsDataUsersOverview,
  tableData: tableDataUsersOverview,
};

function SearchTable2(props: SearchTableUsersOverviewProps) {
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
    gotoPage,
    pageCount,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
    state,
  } = tableInstance as any;

  const createPages = (count: number) => {
    let arrPageCount: any[] = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  const { pageIndex, pageSize } = state;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');
  return (
    <>
      <Flex
        flexDirection="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex
          align={{ sm: 'flex-start', lg: 'flex-start' }}
          justify={{ sm: 'flex-start', lg: 'flex-start' }}
          w="100%"
          px="22px"
          mb="36px"
        >
          <SearchBar
            onChange={(e: any) => setGlobalFilter(e.target.value)}
            h="44px"
            w={{ lg: '390px' }}
            borderRadius="16px"
          />
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
                    {...column.getHeaderProps(
                      column.getSortByToggleProps()
                    )}
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
                    if (cell.column.Header === 'USER NAME') {
                      data = (
                        <Flex alignItems="center">
                          <Avatar
                            src={cell.value[1]}
                            h="60px"
                            w="60px"
                            me="10px"
                          />
                          <Text
                            color={textColor}
                            fontSize="md"
                            fontWeight="500"
                          >
                            {cell.value[0]}
                          </Text>
                        </Flex>
                      );
                    } else if (cell.column.Header === 'EMAIL') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="md"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'USERNAME') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="md"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'JOIN DATE') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="md"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'USER TYPE') {
                      data = (
                        <Text
                          color={textColor}
                          fontSize="md"
                          fontWeight="500"
                        >
                          {cell.value}
                        </Text>
                      );
                    } else if (cell.column.Header === 'ACTIONS') {
                      data = (
                        <Text
                          cursor="pointer"
                          color={brandColor}
                          textDecoration="underline"
                          fontSize="md"
                          fontWeight="500"
                          id={cell.value}
                        >
                          Edit user
                        </Text>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: '14px' }}
                        minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                        borderColor={borderColor}
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
        <Flex
          direction={{ sm: 'column', md: 'row' }}
          justify="space-between"
          alignItems="center"
          w="100%"
          px={{ md: '22px' }}
        >
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="normal"
            mb={{ sm: '24px', md: '0px' }}
          >
            Showing {pageSize * pageIndex + 1} to{' '}
            {pageSize * (pageIndex + 1) <= tableData.length
              ? pageSize * (pageIndex + 1)
              : tableData.length}{' '}
            of {tableData.length} entries
          </Text>
          <Stack
            flexDirection="row"
            alignSelf="flex-end"
            spacing="4px"
            ms="auto"
          >
            <Button
              variant="no-effects"
              onClick={() => previousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="transparent"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'white')}
              display={
                pageSize === 5 ? 'none' : canPreviousPage ? 'flex' : 'none'
              }
              _hover={{
                bg: 'whiteAlpha.100',
                opacity: '0.7',
              }}
            >
              <Icon
                as={MdChevronLeft}
                w="16px"
                h="16px"
                color={textColor}
              />
            </Button>
            {pageSize === 5 ? (
              <NumberInput
                max={pageCount - 1}
                min={1}
                w="75px"
                mx="6px"
                defaultValue="1"
                onChange={(e: any) => gotoPage(e)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper onClick={() => nextPage()} />
                  <NumberDecrementStepper onClick={() => previousPage()} />
                </NumberInputStepper>
              </NumberInput>
            ) : (
              createPages(pageCount).map((pageNumber, index) => {
                return (
                  <Button
                    variant="no-effects"
                    transition="all .5s ease"
                    onClick={() => gotoPage(pageNumber - 1)}
                    w="40px"
                    h="40px"
                    borderRadius="50%"
                    bg={
                      pageNumber === pageIndex + 1
                        ? brandColor
                        : 'transparent'
                    }
                    border={
                      pageNumber === pageIndex + 1
                        ? 'none'
                        : '1px solid lightgray'
                    }
                    _hover={
                      pageNumber === pageIndex + 1
                        ? {
                            opacity: '0.7',
                          }
                        : {
                            bg: 'whiteAlpha.100',
                          }
                    }
                    key={index}
                  >
                    <Text
                      fontSize="sm"
                      color={
                        pageNumber === pageIndex + 1 ? '#fff' : textColor
                      }
                    >
                      {pageNumber}
                    </Text>
                  </Button>
                );
              })
            )}
            <Button
              variant="no-effects"
              onClick={() => nextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="transparent"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'white')}
              display={
                pageSize === 5 ? 'none' : canNextPage ? 'flex' : 'none'
              }
              _hover={{
                bg: 'whiteAlpha.100',
                opacity: '0.7',
              }}
            >
              <Icon
                as={MdChevronRight}
                w="16px"
                h="16px"
                color={textColor}
              />
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}

SearchTable2.defaultProps = defaultProps;

export default SearchTable2;
