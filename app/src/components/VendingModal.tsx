import { Drink } from "@/lib/@type/drink";
import { VendingType } from "@/lib/@type/vending";
import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";

interface VendingModalProps {
    isOpen: boolean
    vending: VendingType
    drinks: Drink[]
    onClose: () => void
}

export const VendingModal: FC<VendingModalProps> = ({ isOpen, vending, drinks, onClose }) => {

    return <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered size="6xl">
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Flex justifyContent='center'>
                        <Box>
                            <Text>{vending.address}</Text>
                            <Text>{vending.pay}</Text>
                            <Text>x:{vending.location_x}, y:{vending.location_y}</Text>
                        </Box>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>商品名</Th>
                                        <Th isNumeric>価格</Th>
                                        <Th>温度</Th>
                                        <Th>カテゴリー</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {
                                        drinks.map((drink, index) => {
                                            return <Tr key={index}>
                                                <Td>{drink.product_name}</Td>
                                                <Td isNumeric>{drink.price}</Td>
                                                <Td>{drink.temp}</Td>
                                                <Td>{drink.category}</Td>
                                            </Tr>
                                        })
                                    }
                                    <Tr>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
}