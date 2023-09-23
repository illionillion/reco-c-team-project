import type { SearchResult } from '@/lib/@type/search-result';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, Flex, Image, Text } from '@chakra-ui/react';
import type { FC } from 'react';

interface ResultDrawerProps {
    isOpen: boolean
    searchWord: string
    searchResult: SearchResult[]
    onClose: () => void
}

export const ResultDrawer: FC<ResultDrawerProps> = ({ isOpen, searchWord, searchResult, onClose }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        variant='alwaysOpen'
        placement='right'
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>検索飲み物「{searchWord}」</DrawerHeader>

          <DrawerBody p={0}>
            <Flex flexDirection='column'>
              {searchResult.map((item, index) => {
                return (
                  <Flex key={index} py={4} px={6} borderTop='1px solid #000'>
                      <Box textAlign="center" flex={1}>
                        <Image m="auto" width="30px" src={item.url} />
                        <Text>{item.product_name}</Text>
                      </Box>
                      <Flex flex={2} justify='center' alignItems='center'>
                        {parseInt(item.price)}円
                      </Flex>
                  </Flex>
                );
              })}
            </Flex>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
};