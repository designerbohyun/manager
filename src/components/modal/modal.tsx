import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { MdDeleteOutline } from "react-icons/md";
import { Icon } from "@chakra-ui/icon";
import { Input, InputGroup } from "@chakra-ui/input";

const DeleteModalBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <IconButton aria-label="delete-btn" icon={<MdDeleteOutline />} onClick={onOpen} variant="ghost" colorScheme="red"></IconButton>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" cursor="default" display="flex" alignItems="center" gap={3}>
                        <Box bgColor="red.50" w="2.5rem" h="2.5rem" borderRadius="6.25rem" display="flex" justifyContent="center" alignItems="center"><Icon as={MdDeleteOutline} color="red.500" /></Box>
                        <Heading fontSize="lg">고객 정보를 삭제하시겠습니까?</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <Text color="gray.600">고객 정보를 삭제할 경우, 고객과 관련된 모든
                            서비스 이용 내역이 삭제됩니다.</Text>
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

export default DeleteModalBtn;


export const GroupModalBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button onClick={onOpen} variant="outline" colorScheme="gray">그룹 이동</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent minH="32.125rem" overflowX="hidden" overflowY="scroll">
                    <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" >
                        <Heading fontSize="lg">그룹 이동</Heading>
                        <ModalCloseButton mt={3} />
                    </ModalHeader>
                    <ModalBody>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box >
    )
};
