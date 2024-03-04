import React from "react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/table";
import { Checkbox } from "@chakra-ui/checkbox";
import { Text } from "@chakra-ui/layout";
import { GroupBadge } from "./badge";
import DeleteModalBtn from "./modal/modal";


export const CustomerTableHeader = () => {
    return (
        <Thead display="flex" justifyContent="start" alignItems="center" w="100%">
            <Tr w="100%">
                <Th p={3} fontSize="sm" w="1%" bg="red.50"><Checkbox colorScheme="cyan" size="lg" /></Th>
                <Th p={3} fontSize="sm" w="14%" bg="red.100">이름</Th>
                <Th p={3} fontSize="sm" w="10%" bg="red.200">전화번호</Th>
                <Th p={3} fontSize="sm" w="14%" bg="red.300">그룹</Th>
                <Th p={3} fontSize="sm" w="20%" bg="red.400">기타사항</Th>
                <Th p={3} fontSize="sm" w="1%" bg="red.900"></Th>
            </Tr>
        </Thead>
    )
};

export const CustomerTableBody = () => {
    return (
        <Tbody display="flex" justifyContent="center" alignItems="center" w="100%">
            <Tr w="100%">
                <Td p={3} w="1%"><Checkbox colorScheme="cyan" size="lg" /></Td>
                <Td p={3} w="14%" overflow="hidden" textOverflow="ellipsis">이름은 영문 숫자로만 입력되며 최대 </Td>
                <Td p={3} w="10%">010-1234-5678</Td>
                <Td p={3} w="14%" overflow="hidden">
                    <GroupBadge badgeText="이름은 영문 숫자로만 입력되며 최대"></GroupBadge>
                </Td>

                <Td p={3} overflow="hidden" textOverflow="ellipsis">
                    <Text w="30%" overflow="hidden" textOverflow="ellipsis">
                        기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느정도로 보이는지 측정해야겠다.기타사항은 최대 80자로 입력이 가능한데, 목록에서는 어느
                    </Text>
                </Td>
                <Td p={3}>
                    <DeleteModalBtn></DeleteModalBtn>
                </Td>
            </Tr>

        </Tbody>
    )
};



const CustomerTable = () => {
    return (
        <TableContainer w="100%">
            <Table variant='simple' display="flex" flexDirection="column">
                <CustomerTableHeader></CustomerTableHeader>
                <CustomerTableBody></CustomerTableBody>
            </Table>
        </TableContainer>
    )
};

export default CustomerTable;

