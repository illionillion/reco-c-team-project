import { Box, Button, Input, InputGroup, InputLeftElement, InputRightAddon, Text } from '@chakra-ui/react';
import type { FC, RefObject } from 'react';
import { BsSearch } from 'react-icons/bs';
interface HedaerProps {
  searchInputRef: RefObject<HTMLInputElement> | null
  submitSearch: () => Promise<void>
}
export const Header: FC<HedaerProps> = ({searchInputRef, submitSearch }) => {
  return (
    <Box as="header" w='100vw' h="16" backgroundColor='blue.700' position='sticky' top={0} px={6} display='flex' justifyContent='center' alignItems='center'>
      <InputGroup flex={1} borderRadius={5} backgroundColor='white' w="50%">
        <InputLeftElement
          pointerEvents="none"
        >
          <BsSearch color="gray.600" />
        </InputLeftElement>
        <Input ref={searchInputRef} type="text" placeholder="商品検索" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button borderLeftRadius={0} borderRightRadius={3.3} onClick={submitSearch} >検索</Button>
        </InputRightAddon>
      </InputGroup>
      <Box flex={1} justifyContent="center" display="flex">
        <Text fontSize="1.5rem" color="#fff">自販機サーチャー</Text>
      </Box>
    </Box>
  );
};