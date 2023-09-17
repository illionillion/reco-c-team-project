import { Drink } from "@/lib/@type/drink";
import { VendingType } from "@/lib/@type/vending";
import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { FC } from "react";

interface VendingModalProps {
    isOpen: boolean
    vending: VendingType
    drinks: Drink[]
    onClose: () => void
}

export const VendingModal: FC<VendingModalProps> = ({ isOpen, vending, drinks, onClose }) => {

    return <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Flex>
                        <Box>
                            <Text>{vending.address}</Text>
                            <Text>{vending.pay}</Text>
                            <Text>x:{vending.location_x}, y:{vending.location_y}</Text>
                        </Box>
                        <Box>
                            {
                                drinks.map((drink, index) => {
                                    return <Box key={index}>
                                        {JSON.stringify(drink)}
                                    </Box>
                                })
                            }
                        </Box>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
}