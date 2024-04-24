import React from "react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/table";
import { Checkbox } from "@chakra-ui/checkbox";
import { Text, Box } from "@chakra-ui/layout";
import { GroupBadge } from "../Badge";
import { DeleteModalBtn } from "../modal/Customermodal";



export const CustomerTableHeader = () => {
    return (
        <Thead w="100%">
            <Tr >
                <Th pr={4} fontSize="sm"><Checkbox colorScheme="cyan" size="lg" /></Th>
                <Th pl={0} pr={4} fontSize="sm"><Text>이름</Text></Th>
                <Th pl={0} pr={4}><Text>전화번호</Text></Th>
                <Th pl={0} pr={4} fontSize="sm"><Text>그룹</Text></Th>
                <Th pl={0} pr={4} fontSize="sm"><Text>기타사항</Text></Th>
                <Th fontSize="sm"><Box></Box></Th>
            </Tr>
        </Thead >
    )
};

export const CustomerTableBody = () => {
    return (
        <Tbody w="100%">
            <Tr>
                <Td pr={4} py="12px">
                    <Checkbox colorScheme="cyan" size="lg" />
                </Td>
                <Td pl={0} pr={4} py="12px"><Text overflow="hidden" textOverflow="ellipsis" noOfLines={1}>이름은 영문 숫자로만 입력되며 최대</Text></Td>
                <Td pl={0} pr={4} whiteSpace="nowrap" py="12px">010-1234-5678</Td>
                <Td pl={0} pr={4} py="12px">
                    <GroupBadge badgeText="이름은 영문 숫자로만 입력되며 최대"></GroupBadge>
                </Td>

                <Td pl={0} pr={4} py="12px">
                    <Text w="100%" overflow="hidden" textOverflow="ellipsis" noOfLines={1}>
                        기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느정도로 보이는지 측정해야겠다.기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느
                    </Text>
                </Td>
                <Td pl={0} py="12px" display="flex" justifyContent="center" alignItems="center">
                    <DeleteModalBtn></DeleteModalBtn>
                </Td>
            </Tr>
        </Tbody >
    )
};

export const CustomerTableNone = () => {
    return (
        <Tbody>
            <Tr>
                <Td colSpan={4} border="none">
                    <Text fontSize="sm" color="gray.500" textAlign="center" h="100%" minH="25rem">현재 추가된 그룹이 없습니다.</Text>
                </Td>
            </Tr>
        </Tbody>
    )
}


export const CustomerTable = () => {
    return (
        <TableContainer w="100%">
            <Table variant='simple' layout="auto" whiteSpace="wrap" >
                <CustomerTableHeader></CustomerTableHeader>
                <CustomerTableBody></CustomerTableBody>
                {/* Customer Table Body에 데이터 없는 경우, */}
                {/* <CustomerTableNone></CustomerTableNone> */}
            </Table>
        </TableContainer>
    )
};
