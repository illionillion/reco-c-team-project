import { Box, Modal, ModalOverlay, Spinner, useBreakpointValue } from '@chakra-ui/react';
import type { FC } from 'react';

interface SpinnerModalProps {
    isOpen: boolean
    onClose: () => void
}

export const SpinnerModal:FC<SpinnerModalProps> = ({ isOpen, onClose }) => {
  const isPc = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Modal isCentered isOpen={isOpen} scrollBehavior="inside" size="xl" onClose={onClose}>
        <Box position="relative">
          <ModalOverlay>
            <Box
              display="flex"
              position="absolute"
              zIndex={10000} // ModalOverlayが 1300 程度
              top="50%"
              left={isPc ? '50%' : '40vw'}
            >
              <Spinner size='xl' />
            </Box>
          </ModalOverlay>
        </Box>
      </Modal>
    </>
  );
};  