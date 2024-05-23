import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { MdAdd } from "react-icons/md";
import { ChooseCustomerModal } from "./ChooseCustomerModal";
import { SearchBar } from "../../SearchBar";


export const AddReservation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const scrollBehavior = 'inside'
    return (
        <Box>
            <Button colorScheme="cyan" size="md" variant="solid" leftIcon={<MdAdd />} color="white" fontWeight="700" onClick={onOpen}>예약 추가</Button>

            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
                <ModalOverlay />
                <ChooseCustomerModal />
            </Modal>
        </Box >
    )
};