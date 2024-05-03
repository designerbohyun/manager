import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/table";
import { Text, Box } from "@chakra-ui/layout";
import { EditProductDrawer } from "../drawer/ProductDrawer";
import { SwitchStateButton } from "../buttons/SwitchButton";
import { useState } from "react";



export const ProductTableHeader = () => {
    return (
        <Thead w="100%">
            <Tr >
                <Th pr={4} fontSize="sm"><Text>상품 ID</Text></Th>
                <Th pl={0} pr={4} fontSize="sm"><Text>이름</Text></Th>
                <Th pl={0} pr={4}><Text>회원가</Text></Th>
                <Th pl={0} pr={4} fontSize="sm"><Text>비회원가</Text></Th>
                <Th pl={0} pr={4} fontSize="sm"><Text>설명</Text></Th>
                <Th fontSize="sm" w="6.25rem"><Box ></Box></Th>
            </Tr>
        </Thead >
    )
};

export const ProductTableBody = () => {
    return (
        <Tbody w="100%">
            <Tr>
                <Td pr={4} py="12px">
                    <EditProductDrawer></EditProductDrawer>
                </Td>
                <Td pl={0} pr={4} py="12px">
                    <Text overflow="hidden" textOverflow="ellipsis" noOfLines={1} >이름은 영문 숫자로만 입력되며 최대</Text>
                </Td>
                <Td pl={0} pr={4} whiteSpace="nowrap" py="12px">100,000원</Td>
                <Td pl={0} pr={4} whiteSpace="nowrap" py="12px">
                    <Text>140,000원</Text>
                </Td>

                <Td pl={0} pr={4} py="12px">
                    <Text w="100%" overflow="hidden" textOverflow="ellipsis" noOfLines={1}>
                        설명은 최대 80자로 입력이 가능한데, 목록에서는 어느정도로 보이는지 측정해야겠다.기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느
                    </Text>
                </Td>
                <Td pl={0} py="12px" display="flex" justifyContent="center" alignItems="center">
                    <SwitchStateButton></SwitchStateButton>
                </Td>
            </Tr>
            <Tr backgroundColor="gray.50">
                <Td pr={4} py="12px">
                    <Text overflow="hidden" textOverflow="ellipsis" noOfLines={1} as="del" color="gray.500">100000450</Text>
                </Td>
                <Td pl={0} pr={4} py="12px">
                    <Text overflow="hidden" textOverflow="ellipsis" color="gray.500" noOfLines={1} >이름은 영문 숫자로만 입력되며 최대</Text>
                </Td>
                <Td pl={0} pr={4} color="gray.500" whiteSpace="nowrap" py="12px">100,000원</Td>
                <Td pl={0} pr={4} color="gray.500" whiteSpace="nowrap" py="12px">
                    <Text>140,000원</Text>
                </Td>

                <Td pl={0} pr={4} color="gray.500" py="12px">
                    <Text w="100%" overflow="hidden" textOverflow="ellipsis" noOfLines={1}>
                        설명은 최대 80자로 입력이 가능한데, 목록에서는 어느정도로 보이는지 측정해야겠다.기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느
                    </Text>
                </Td>
                <Td pl={0} py="12px" display="flex" justifyContent="center" alignItems="center">
                    <SwitchStateButton></SwitchStateButton>
                </Td>
            </Tr>
        </Tbody >
    )
};

export const ProductTableNone = () => {
    return (
        <Tbody>
            <Tr>
                <Td colSpan={4} border="none">
                    <Text fontSize="sm" color="gray.500" textAlign="center" h="100%" minH="25rem">현재 추가된 상품이 없습니다.</Text>
                </Td>
            </Tr>
        </Tbody>
    )
}


export const ProductTable = () => {
    return (
        <TableContainer w="100%">
            <Table variant='simple' layout="auto" whiteSpace="wrap" >
                <ProductTableHeader></ProductTableHeader>
                <ProductTableBody></ProductTableBody>
                {/* Product Table Body에 데이터 없는 경우, */}
                {/* <ProductTableNone></ProductTableNone> */}
            </Table>
        </TableContainer>
    )
};
function setIsOn(arg0: (prevState: any) => boolean) {
    throw new Error("Function not implemented.");
}

