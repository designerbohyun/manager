import React from "react";
import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement, Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react";
import { ReservationStepper } from "../../Stepper";
import { MdSearch } from "react-icons/md";
import { CustomerRadio, CustomerRadioItem } from "../../buttons/CustomerRadio";


export const ChooseCustomerModal = () => {
    const steps = [
        { title: '고객 선택' },
        { title: '날짜 선택' },
        { title: '상품 선택' },
    ]

    return (
        <ModalContent maxH="43.75rem" overflow="hidden">
            <ModalHeader pt={6} borderBottom="1px solid" borderBottomColor="gray.200" >
                <Heading fontSize="lg">고객 선택</Heading>
                <ModalCloseButton mt={3} />
            </ModalHeader>
            <ModalBody display="flex" flexDirection="column" gap={4} pt={4}>
                <ReservationStepper />
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <MdSearch />
                    </InputLeftElement>
                    <Input type='text' colorScheme="cyan" placeholder='이름을 입력해주세요.' />
                </InputGroup>
                <Box w="100%" h="100%" display="grid" overflowX="hidden" overflowY="scroll" border="1px solid" borderColor="gray.300" borderRadius={6}>
                    <CustomerRadioItem />
                </Box>
            </ModalBody>
            <ModalFooter pt={1}>
                <Button bgColor="gray.700" _hover={{ bgColor: "gray.800" }} color="white" w="100%">다음</Button>
            </ModalFooter>
        </ModalContent >
    )

};
