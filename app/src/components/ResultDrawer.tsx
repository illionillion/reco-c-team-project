import type { SearchResult } from '@/lib/@type/search-result';
import { translatePay, translateTemp } from '@/lib/translate/translate';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, Flex, Image, Text } from '@chakra-ui/react';
import type { FC } from 'react';

interface ResultDrawerProps {
    isOpen: boolean
    searchWord: string
    searchResult: SearchResult[]
    panTo: (latLng: google.maps.LatLng | google.maps.LatLngLiteral) => void
    onClose: () => void
}

export const ResultDrawer: FC<ResultDrawerProps> = ({ isOpen, searchWord, searchResult, panTo, onClose }) => {
  const handleClick = (item: SearchResult) => {
    const lating = new google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng))
    panTo(lating)
  }
  return (
    <>
      <Drawer
        isOpen={isOpen}
        variant='alwaysOpen'
        placement='left'
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
                  <Flex key={index} py={4} px={6} borderTop='1px solid #000' cursor='pointer' onClick={() => handleClick(item)}>
                      <Box textAlign="center" flex={1}>
                        <Image m="auto" width="30px" src={item.url} />
                        <Text>{item.product_name}</Text>
                      </Box>
                      <Flex flex={2} justify='center' alignItems='center' flexDir='column' gap={1}>
                        <Text w="full">価格：{parseInt(item.price)}円</Text>
                        <Text w="full">住所：{item.address}</Text>
                        <Text w="full">支払い方法：{translatePay(item.pay)}</Text>
                        <Text w="full">温度：{translateTemp(item.temp)}</Text>
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