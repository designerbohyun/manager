import React from "react";
import { Button } from "@chakra-ui/button";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { MdAdd } from "react-icons/md";
import { Box, Text } from "@chakra-ui/layout";
import { MemberInput, MemberPriceInput, RequiredInput } from "../Inputs";
import { GroupSelect } from "../Select";
import { EtcField } from "../Inputs";


export const AddCustomerDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box>
            <Button colorScheme="cyan" size="md" variant="solid" leftIcon={<MdAdd />} color="white" fontWeight="700" onClick={onOpen}>고객 추가</Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader p={4} display="flex" justifyContent="start" alignItems="center" borderBottom="1px solid" borderColor="gray.200">
                        <Text fontSize="md" fontWeight="700" color="gray.800">고객 추가</Text>
                    </DrawerHeader>

                    <DrawerBody p={4} display="flex" flexDirection="column" gap={6}>
                        <RequiredInput Type="text" Maxlength={20} Label="이름" Required="[필수]" Placeholder="이름을 입력해주세요." Description="한글 / 영문 / 숫자만 입력 가능.(최대 20자)"></RequiredInput>
                        <RequiredInput Type="number" Maxlength={20} Label="전화번호" Required="[필수]" Placeholder="전화번호를 입력해주세요." Description="숫자만 입력가능"></RequiredInput>
                        <MemberInput></MemberInput>
                        <MemberPriceInput></MemberPriceInput>
                        <GroupSelect></GroupSelect>
                        <EtcField></EtcField>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme="gray" size="md" variant="outline" color="gray.600" fontWeight="700" borderColor="gray.300" onClick={onClose} mr={2} w="50%">취소</Button>
                        <Button colorScheme="cyan" size="md" variant="solid" color="white" fontWeight="700" w="50%" onClick={onClose}>저장하기</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box >
    )
};

export const EditCustomerDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box>
            <Button colorScheme="cyan" size="md" variant="solid" leftIcon={<MdAdd />} color="white" fontWeight="700" onClick={onOpen}>고객 수정</Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader p={4} display="flex" justifyContent="start" alignItems="center" borderBottom="1px solid" borderColor="gray.200">
                        <Text fontSize="md" fontWeight="700" color="gray.800">고객 수정</Text>
                    </DrawerHeader>

                    <DrawerBody p={4} display="flex" flexDirection="column" gap={6}>
                        <RequiredInput Type="text" Maxlength={20} Label="이름" Required="[필수]" Placeholder="이름을 입력해주세요." Description="한글 / 영문 / 숫자만 입력 가능.(최대 20자)"></RequiredInput>
                        <RequiredInput Type="number" Maxlength={20} Label="전화번호" Required="[필수]" Placeholder="전화번호를 입력해주세요." Description="숫자만 입력가능"></RequiredInput>
                        <MemberInput></MemberInput>
                        <MemberPriceInput></MemberPriceInput>
                        <GroupSelect></GroupSelect>
                        <EtcField></EtcField>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme="gray" size="md" variant="outline" color="gray.600" fontWeight="700" borderColor="gray.300" onClick={onClose} mr={2} w="50%">취소</Button>
                        <Button colorScheme="cyan" size="md" variant="solid" color="white" fontWeight="700" w="50%" onClick={onClose}>저장하기</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box >
    )
};
