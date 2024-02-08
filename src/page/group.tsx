import React from "react";
import { Box } from "@chakra-ui/layout";
import { DefaultHeader } from "../components/headers";
import { groupMockData } from "../data/mockdata";
import CustomerTable from "../components/table";
import Pagination from "../components/pagination";

const GroupListPage = () => {
    return (
        <Box w="100%" p="1.5rem" display="flex" flexDirection="column" gap="4">
            <DefaultHeader DefaultHeaderData={groupMockData.DefaultHeaderData}></DefaultHeader>
            <Box w="fit" h="fit" overflow="hidden" borderRadius=".5rem" border="1px solid" borderColor="gray.300" bg="white">
                <CustomerTable></CustomerTable>
            </Box>
            <Box w="full" display="flex" justifyContent="center" alignItems="center" position="absolute" bottom={6} left={1 / 2} translateX={-1 / 2}>
                <Pagination></Pagination>
            </Box>
        </Box>
    )
};

export default GroupListPage;