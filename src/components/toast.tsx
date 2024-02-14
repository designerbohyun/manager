import React from "react";
import { MdCheckCircle, MdError } from "react-icons/md";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import { Box, Text } from "@chakra-ui/layout";

export const SuccessAlert = () => {
    const toast = useToast()
    return (
        <Button colorScheme="cyan" color="white" fontWeight="700"
            onClick={() =>
                toast({
                    status: 'success',
                    duration: 1000,
                    isClosable: true,
                    position: 'top-right',
                    render: () => (
                        <Box p={3} bg='green.50' border='1px solid' borderColor='green.500' textColor='green.500' borderRadius={4} display="flex" justifyContent="start" alignItems="center" gap={3}>
                            <MdCheckCircle />
                            <Text fontSize="small" fontWeight="700">추가되었습니다.</Text>
                        </Box >
                    )
                })
            }
        >
            저장하기
        </Button >
    )
}

export const ErrorAlert = () => {
    const toast = useToast()
    return (
        <Button colorScheme="cyan" color="white" fontWeight="700"
            onClick={() =>
                toast({
                    status: 'error',
                    duration: 1000,
                    isClosable: true,
                    position: 'top-right',
                    render: () => (
                        <Box p={3} bg='red.50' border='1px solid' borderColor='red.500' textColor='red.500' borderRadius={4} display="flex" justifyContent="start" alignItems="center" gap={3}>
                            <MdError />
                            <Text fontSize="small"><b>예기치 못한 오류</b>로 처리에 실패했습니다.</Text>
                        </Box >
                    )
                })
            }
        >
            이동하기
        </Button >
    )
}

export const InfoAlert = () => {
    const toast = useToast()
    return (
        <Button colorScheme="cyan" color="white" fontWeight="700"
            onClick={() =>
                toast({
                    status: 'error',
                    duration: 1000,
                    isClosable: true,
                    position: 'top-right',
                    render: () => (
                        <Box p={3} bg='gray.800' textColor='white' borderRadius={4}>
                            <Text fontSize="small" fontWeight="700">필수 항목을 입력해주세요.</Text>
                        </Box >
                    )
                })
            }
        >
            이동하기
        </Button >
    )
}