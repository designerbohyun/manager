import React from "react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/table";
import { Checkbox } from "@chakra-ui/checkbox";
import { Text } from "@chakra-ui/layout";
import { GroupBadge } from "./badge";
import DeleteModalBtn from "./modal/modal";



export const CustomerTableHeader = () => {
    return (
        <Thead>
            <Tr>
                <Th fontSize="sm"><Checkbox colorScheme="cyan" size="lg" /></Th>
                <Th fontSize="sm">이름</Th>
                <Th fontSize="sm">전화번호</Th>
                <Th fontSize="sm">그룹</Th>
                <Th fontSize="sm">기타사항</Th>
                <Th fontSize="sm"></Th>
            </Tr>
        </Thead >
    )
};

export const CustomerTableBody = () => {
    return (
        <Tbody >
            <Tr w="100%">
                <Td>
                    <Checkbox colorScheme="cyan" size="lg" />
                </Td>
                <Td ><Text w="100%" overflow="hidden" textOverflow="ellipsis">이름은 영문 숫자로만 입력되며 최대</Text></Td>
                <Td ><Text>010-1234-5678</Text></Td>
                <Td >
                    <GroupBadge badgeText="이름은 영문 숫자로만 입력되며 최대"></GroupBadge>
                </Td>

                <Td  >
                    <Text w="100%" overflow="hidden" textOverflow="ellipsis">
                        기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느정도로 보이는지 측정해야겠다.기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느
                    </Text>
                </Td>
                <Td>
                    <DeleteModalBtn></DeleteModalBtn>
                </Td>
            </Tr>
        </Tbody>
    )
};



const CustomerTable = () => {
    return (
        <TableContainer w="100%" overflowX="hidden">
            <Table variant='simple' w="100%" layout="auto">
                <CustomerTableHeader></CustomerTableHeader>
                <CustomerTableBody></CustomerTableBody>
            </Table>
        </TableContainer>
    )
};

export default CustomerTable;

