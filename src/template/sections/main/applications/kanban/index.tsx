import '@asseinfo/react-kanban/dist/styles.css';

// Chakra imports
// @ts-ignore
import Board from '@asseinfo/react-kanban';

import { AddIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Flex,
  Icon,
  FormControl,
  IconButton,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import { MdEdit } from 'react-icons/md';

import {
  kanbanRenderThumb,
  kanbanRenderTrack,
  kanbanRenderView,
} from 'src/template/components/scrollbar/Scrollbar';
import React, { useState, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { NextChakraImage } from 'src/template/components/NextChakraImage';

export type DefaultProps = {};

function Kanban() {
  // Kanban Settings, states, etc.
  let initialBoard = {
    counter: 9,
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1.1,
            title: 'Option to "use local/server version" feature',
            desc: "It usually displays this message when you close an unsaved page when you do it on purpose, and it's getting frustrated to see this every time.",
            status: 'UPDATES',
            members: [
              '/assets/images/avatars/avatar2.png',
              '/assets/images/avatars/avatar3.png',
            ],
          },
          {
            id: 1.2,
            image: 'assets/images/applications/kanban1.png',
            members: [
              '/assets/images/avatars/avatar2.png',
              '/assets/images/avatars/avatar3.png',
              '/assets/images/avatars/avatar4.png',
            ],
            status: 'PENDING',
            title: 'Add/modify your own CSS-Selectors',
            desc: 'Website Design: The ability to add/modify your own CSS-Selectors like its done in Venus.',
            attachements: '3',
          },
          {
            id: 1.3,
            title: 'Shortcode for templates to display correctly',
            members: ['/assets/images/avatars/avatar2.png'],
            desc: 'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
            status: 'ERRORS',
          },
        ],
      },
      {
        id: 2,
        title: 'In progress',
        cards: [
          {
            id: 2.1,
            title: "General ideas to improve 'Edit' workflow",
            desc: "Currently, I have a few templates in the Local Library and when I want to add them I'm always presented (by default).",
            members: [
              '/assets/images/avatars/avatar2.png',
              '/assets/images/avatars/avatar3.png',
              '/assets/images/avatars/avatar4.png',
            ],
            status: 'PENDING',
            attachements: '2',
          },
          {
            id: 2.2,
            title: 'Shortcode for templates to display correctly',
            desc: 'When you save some sections as a template and then paste a shortcode to a new page, the layout is broken, some styles are missing - in the editor.',
            status: 'UPDATES',
            members: ['/assets/images/avatars/avatar2.png'],
          },
          {
            id: 2.3,
            image: 'assets/images/applications/kanban2.png',
            members: [
              '/assets/images/avatars/avatar2.png',
              '/assets/images/avatars/avatar3.png',
            ],
            status: 'ERRORS',
            title: '[UX Design] - Set the default Library tab',
            desc: 'I want to be able to set the default Library tab (or a way to remember the last active tab), especially when I already...',
          },
        ],
      },
      {
        id: 3,
        title: 'Done',
        cards: [
          {
            id: 3.1,
            title: 'Copy/Paste elements between pages',
            desc: 'We can only copy/paste elements (or group of elements) in the same page, which is quite limited.',
            status: 'DONE',
            members: ['/assets/images/avatars/avatar2.png'],
          },
          {
            id: 3.2,
            title: 'Remove Extra DIV for each container added',
            desc: "I still hope there won't have an extra div for each container we added. It should be something for better styling...",
            status: 'DONE',
            members: [
              '/assets/images/avatars/avatar2.png',
              '/assets/images/avatars/avatar3.png',
              '/assets/images/avatars/avatar4.png',
            ],
          },
          {
            id: 3.3,
            title: 'Add Figma files for the Library design blocks',
            desc: 'I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads...',
            status: 'DONE',
            members: [
              '/assets/images/avatars/avatar2.png',
              '/assets/images/avatars/avatar3.png',
            ],
          },
        ],
      },
    ],
  };
  const [board, setBoard] = useState<typeof initialBoard>(initialBoard);

  function onCardNew(newCard: any) {
    const newCardLocal = { id: initialBoard.counter + 1, ...newCard };
    initialBoard.counter = initialBoard.counter + 1;
    setBoard(initialBoard);
    return newCardLocal;
  }
  const kanbanFormA = useRef<any>(null);
  const cardInputA = useRef<any>(null);
  const kanbanFormB = useRef<any>(null);
  const cardInputB = useRef<any>(null);
  const kanbanFormC = useRef<any>(null);
  const cardInputC = useRef<any>(null);

  // Chakra color mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  const shadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'transparent'
  );
  const bgButton = useColorModeValue(
    'secondaryGray.300',
    'whiteAlpha.100'
  );
  const brandText = useColorModeValue('brand.500', 'white');
  const kanbanCardBg = useColorModeValue('white', 'brandDark.700');

  return (
    <Flex
      flexDirection="column"
      minH="100vh"
      alignItems="center"
      pt={{ sm: '125px', lg: '75px' }}
      overflow="hidden"
    >
      <Flex maxWidth="100%">
        <Scrollbars
          autoHide
          renderTrackHorizontal={kanbanRenderTrack}
          renderThumbHorizontal={kanbanRenderThumb}
          renderView={kanbanRenderView}
        >
          <Board
            initialBoard={board}
            allowAddCard
            onNewCardConfirm={onCardNew}
            onCardNew={console.log}
            renderColumnHeader={function (
              { title, id }: any,
              { addCard }: any
            ) {
              function kanbanFormOpenA() {
                kanbanFormA.current.style.display = 'flex';
                console.log(id);
              }
              function kanbanFormCloseA() {
                kanbanFormA.current.style.display = 'none';
              }
              function formSubmitA() {
                addCard({ title: cardInputA.current.value });
                cardInputA.current.value = '';
              }
              function kanbanFormOpenB() {
                kanbanFormB.current.style.display = 'flex';
              }
              function kanbanFormCloseB() {
                kanbanFormB.current.style.display = 'none';
              }
              function formSubmitB() {
                addCard({ title: cardInputB.current.value });
                cardInputB.current.value = '';
              }
              function kanbanFormOpenC() {
                kanbanFormC.current.style.display = 'flex';
              }
              function kanbanFormCloseC() {
                kanbanFormC.current.style.display = 'none';
              }
              function formSubmitC() {
                addCard({ title: cardInputC.current.value });
                cardInputC.current.value = '';
              }
              return (
                <Flex
                  key={id}
                  flexDirection="column"
                  mb="7px"
                  fontWeight="bold"
                  w="100%"
                >
                  <Flex
                    justify="space-between"
                    alignItems="center"
                    mb="24px"
                  >
                    <Text fontSize="22px" mt="5px" color={textColor}>
                      {title}
                    </Text>
                    <IconButton
                      w="92px"
                      h="35px"
                      borderRadius="12px"
                      aria-label="Search database"
                      variant="no-hover"
                      bg={bgButton}
                      icon={
                        <AddIcon w="12px" h="12px" color={brandText} />
                      }
                      onClick={
                        id === 1
                          ? kanbanFormOpenA
                          : id === 2
                          ? kanbanFormOpenB
                          : id === 3
                          ? kanbanFormOpenC
                          : undefined
                      }
                    />
                  </Flex>
                  <Flex
                    flexDirection="column"
                    ref={
                      id === 1
                        ? kanbanFormA
                        : id === 2
                        ? kanbanFormB
                        : id === 3
                        ? kanbanFormC
                        : null
                    }
                    display="none"
                  >
                    <FormControl>
                      <Input
                        ref={
                          id === 1
                            ? cardInputA
                            : id === 2
                            ? cardInputB
                            : id === 3
                            ? cardInputC
                            : null
                        }
                        borderRadius="15px"
                        mb="20px"
                        variant="main"
                      />
                      <Flex>
                        <Button
                          variant="brand"
                          me="14px"
                          onClick={
                            id === 1
                              ? formSubmitA
                              : id === 2
                              ? formSubmitB
                              : id === 3
                              ? formSubmitC
                              : undefined
                          }
                        >
                          Add Card
                        </Button>
                        <Button
                          variant="no-hover"
                          bg={bgButton}
                          onClick={
                            id === 1
                              ? kanbanFormCloseA
                              : id === 2
                              ? kanbanFormCloseB
                              : id === 3
                              ? kanbanFormCloseC
                              : undefined
                          }
                        >
                          Cancel
                        </Button>
                      </Flex>
                    </FormControl>
                  </Flex>
                </Flex>
              );
            }}
            renderCard={(
              { image, title, desc, status, members, id }: any,
              { dragging }: any
            ) => (
              <Flex
                key={id}
                boxShadow={shadow}
                mt="10px"
                // dragging={dragging}
                flexDirection="column"
                bg={kanbanCardBg}
                p="25px"
                borderRadius="15px"
                w="470px"
              >
                <Flex alignItems="center" mb="20px">
                  <Text fontWeight="700" fontSize="lg" color={textColor}>
                    {title}
                  </Text>
                  <Flex
                    ms="auto"
                    cursor="pointer"
                    h="max-content"
                    w="max-content"
                  >
                    <Icon
                      color="secondaryGray.500"
                      as={MdEdit}
                      w="17px"
                      h="17px"
                    />
                  </Flex>
                </Flex>
                {image ? (
                  <NextChakraImage
                    alt=""
                    borderRadius="15px"
                    w="420px"
                    h="284px"
                    src={image}
                    mb="20px"
                  />
                ) : null}
                <Text fontSize="md" color={textColorSecondary}>
                  {desc}
                </Text>
                <Flex w="100%" mt="20px" alignItems="center">
                  {members ? (
                    <AvatarGroup size="sm">
                      <Avatar src={'/assets/images/avatars/avatar2.png'} />
                      <Avatar src={'/assets/images/avatars/avatar3.png'} />
                      <Avatar src={'/assets/images/avatars/avatar4.png'} />
                    </AvatarGroup>
                  ) : null}
                  {status ? (
                    <Badge
                      fontSize="10px"
                      fontWeight="bold"
                      variant="solid"
                      h="28px"
                      w="94px"
                      ms="auto"
                      display="flex"
                      borderRadius="8px"
                      alignItems="center"
                      justifyContent="center"
                      bg={
                        status === 'ERRORS'
                          ? 'red.500'
                          : status === 'PENDING'
                          ? 'orange.300'
                          : status === 'DONE'
                          ? 'green.500'
                          : status === 'UPDATES'
                          ? 'cyan.400'
                          : 'teal'
                      }
                      colorScheme={
                        status === 'ERRORS'
                          ? 'red'
                          : status === 'PENDING'
                          ? 'orange'
                          : status === 'DONE'
                          ? 'green'
                          : status === 'UPDATES'
                          ? 'blue'
                          : 'teal'
                      }
                    >
                      {status}
                    </Badge>
                  ) : null}
                </Flex>
              </Flex>
            )}
          />
        </Scrollbars>
      </Flex>
    </Flex>
  );
}

export default Kanban;
