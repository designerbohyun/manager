import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { MdDeleteOutline } from "react-icons/md";

export const DeleteWarningModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <IconButton aria-label="delete-btn" icon={<MdDeleteOutline />} onClick={onOpen} variant="ghost" colorScheme="red"></IconButton>

            <Modal isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" cursor="default" display="flex" alignItems="start" flexDirection="column" gap={3}>
                        <Heading fontSize="lg">해당 그룹에 속한 고객이 남아있습니다.</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <Text color="gray.600">그룹을 삭제할 경우 해당 고객의 그룹이 ‘없음'으로 변경됩니다.<br /> 계속 진행하시겠습니까?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' variant="outline" mr={3} onClick={onClose} color="gray.600">
                            취소
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>삭제하기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
};

export const DeleteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <IconButton aria-label="delete-btn" icon={<MdDeleteOutline />} onClick={onOpen} variant="ghost" colorScheme="red"></IconButton>

            <Modal isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" cursor="default" display="flex" alignItems="start" flexDirection="column" gap={3}>
                        <Heading fontSize="lg">그룹을 삭제하시겠습니까?</Heading>
                    </ModalHeader>
                    <ModalFooter>
                        <Button colorScheme='gray' variant="outline" mr={3} onClick={onClose} color="gray.600">
                            취소
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>삭제하기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
