import { SearchResult } from "@/lib/@type/search-result";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader } from "@chakra-ui/react";
import { FC } from "react";

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
                placement='right'
                onClose={onClose}
            // finalFocusRef={btnRef}
            >
                {/* <DrawerOverlay /> */}
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>検索飲み物「{searchWord}」</DrawerHeader>

                    <DrawerBody>
                        {searchResult.map((item, index) => {
                            return (
                                <Box key={index}></Box>
                            )
                        })}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}