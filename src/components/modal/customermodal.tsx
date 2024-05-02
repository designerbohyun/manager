import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { Button, IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { MdDeleteOutline } from "react-icons/md";
import { GroupRadioItem } from "../buttons/groupradio";

export const DeleteModalBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <IconButton aria-label="delete-btn" icon={<MdDeleteOutline />} onClick={onOpen} variant="ghost" colorScheme="red"></IconButton>

            <Modal isOpen={isOpen} onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" cursor="default" display="flex" alignItems="start" flexDirection="column" gap={3}>
                        <Heading fontSize="lg">고객 정보를 삭제하시겠습니까?</Heading>
                    </ModalHeader>
                    <ModalBody>
                        <Text color="gray.600">고객 정보를 삭제할 경우,<br /> 고객과 관련된 모든
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


export const GroupModalBtn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const scrollBehavior = 'inside'
    return (
        <Box>
            <Button onClick={onOpen} variant="outline" colorScheme="gray">그룹 이동</Button>

            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
                <ModalOverlay />
                <ModalContent minH="32.125rem" overflowX="hidden" overflowY="scroll">
                    <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" >
                        <Heading fontSize="lg">그룹 이동</Heading>
                        <ModalCloseButton mt={3} />
                    </ModalHeader>
                    <ModalBody pl={2} pr={4} py={4}>
                        <Box>
                            <GroupRadioItem></GroupRadioItem>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="cyan" color="white" w="100%" onClick={onClose}>이동하기</Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </Box >
    )
};
