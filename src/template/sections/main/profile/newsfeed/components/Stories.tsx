import {
  Flex,
  Button,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { MdAdd } from 'react-icons/md';
// Custom components
import SeeStory from 'src/template/components/actions/SeeStory';
import Card from 'src/template/components/card/Card';
import React from 'react';
import {
  storiesRenderThumb,
  storiesRenderTrack,
  storiesRenderView,
} from 'src/template/components/scrollbar/Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars-2';

export type StoriesProps = { [x: string]: any };
const defaultProps: StoriesProps = {};

export default function Storiees(props: StoriesProps) {
  const { ...rest } = props;
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const bgAdd = useColorModeValue('white', 'brandDark.800');
  return (
    <Card
      flexDirection="row"
      justifyContent={{ lg: 'space-between' }}
      pb="0px"
      {...rest}
    >
      <Scrollbars
        autoHide
        renderTrackHorizontal={storiesRenderTrack}
        renderThumbHorizontal={storiesRenderThumb}
        renderView={storiesRenderView}
      >
        <Flex
          minW={{ base: '1090px', '2xl': 'unset' }}
          w="100%"
          justifyContent="space-between"
          pb="20px"
        >
          <Button
            bg="transparent"
            variant="no-hover"
            fontWeight="700"
            display="flex"
            h="max-content"
            w="max-content"
            minW="max-content"
            boxShadow="unset"
            flexDirection="column"
          >
            <Flex
              mx="auto"
              h="max-content"
              w="max-content"
              p="3px"
              borderRadius="50%"
              bg="linear-gradient(179.78deg, #7A64FF 0.23%, #FF508B 66.58%, #FD6D53 99.75%, #FD6D53 99.75%);

              "
            >
              <Flex
                borderRadius="50px"
                alignItems="center"
                justify="center"
                bg={bgAdd}
                w="54px"
                h="54px"
              >
                <Icon as={MdAdd} color={textColor} w="24px" h="24px" />
              </Flex>
            </Flex>
            <Text
              mt="10px"
              textAlign="center"
              color={textColor}
              fontSize="sm"
              fontWeight="500"
            >
              Add Story
            </Text>
          </Button>
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Alexander"
            avatar={'/assets/images/avatars/avatar2.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Perdana"
            avatar={'/assets/images/avatars/avatar1.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Sumesh"
            avatar={'/assets/images/avatars/avatar8.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Esthera"
            avatar={'/assets/images/avatars/avatar4.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Louis"
            avatar={'/assets/images/avatars/avatar5.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Roberto"
            avatar={'/assets/images/avatars/avatar6.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Su Jeo"
            avatar={'/assets/images/avatars/avatar10.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Antonia"
            avatar={'/assets/images/avatars/avatar3.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Markus"
            avatar={'/assets/images/avatars/avatar9.png'}
          />
          <SeeStory
            action={() => console.log('Pressed Story')}
            my="auto"
            name="Lawrence"
            avatar={'/assets/images/avatars/avatar7.png'}
          />
        </Flex>
      </Scrollbars>
    </Card>
  );
}

Storiees.defaultProps = defaultProps;
