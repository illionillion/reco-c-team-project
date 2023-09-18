import type { Drink } from '@/lib/@type/drink';
import type { VendingType } from '@/lib/@type/vending';
import { Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import type { FC } from 'react';

interface VendingModalProps {
    isOpen: boolean
    vending: VendingType
    drinks: Drink[]
    onClose: () => void
}

export const VendingModal: FC<VendingModalProps> = ({ isOpen, vending, drinks, onClose }) => {

  const check_pay = (pay: VendingType['pay']) => {
    switch (pay) {
      case 'cashress':
        return 'キャッシュレス';
      case 'cash':
        return '現金';
      default:
        return '~';
    }
  };

  const check_temp = (temp: Drink['temp']) => {
    switch (temp) {
      case 'cold':
        return 'つめたい';
      case 'hot':
        return 'あたかい';
      default:
        return '~';
    }
  };

  const check_category = (category: Drink['category']) => {
    switch (category) {
      case 'soda':
        return '炭酸';
      case 'can':
        return '缶';
      case 'coffee':
        return 'コーヒー';
      case 'energy':
        return 'エナジードリンク';
      case 'juice':
        return 'ジュース';
      case 'sports':
        return 'スポーツドリンク';
      case 'tea':
        return '茶';
      case 'water':
        return '水';
      default:
        return '~';
    }
  };

  return <>
    <Modal isCentered isOpen={isOpen} size="6xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent h="xl" overflowY="hidden">
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <Flex justifyContent='center'>
            <Box flex='1'>
              <Text fontSize="1.5rem" pb={3}>{vending.address}</Text>
              <Text>支払い方法：{check_pay(vending.pay)}</Text>
              <Flex w="full" gap={5}>
                <Text>緯度:{vending.location_x}</Text>
                <Text>経度:{vending.location_y}</Text>
              </Flex>
              <Image my={5} src='https://ascii.jp/img/2021/04/05/3182808/o/b87d497b6c9889f9.jpg' />
            </Box>
            <Box flex='1' h="xl" overflowY="auto">
              <TableContainer>
                <Table variant='simple'>
                  <Thead position="sticky" top={0} zIndex="docked">
                    <Tr>
                      <Th>商品名</Th>
                      <Th isNumeric>価格</Th>
                      <Th>温度</Th>
                      <Th>カテゴリー</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      drinks.length > 0 ?
                        drinks.map((drink, index) => {
                          return <Tr key={index}>
                            <Td>
                              <Box textAlign="center">
                                <Box textAlign="center">
                                  <Image m="auto" width="80px" src={drink.url} />
                                </Box>
                                <Text>{drink.product_name}</Text>
                              </Box>
                            </Td>
                            <Td isNumeric>{parseInt(drink.price)}</Td>
                            <Td>{check_temp(drink.temp)}</Td>
                            <Td>{check_category(drink.category)}</Td>
                          </Tr>;
                        }) : <Tr>
                          <Td colSpan={4} textAlign="center">データなし</Td>
                        </Tr>
                    }
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>;
};