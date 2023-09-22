import type { SearchResult } from '@/lib/@type/search-result';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader } from '@chakra-ui/react';
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

          <DrawerBody>
            {searchResult.map((item, index) => {
              return (
                <Box key={index}></Box>
              );
            })}
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
};