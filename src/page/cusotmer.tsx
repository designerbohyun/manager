import React from "react";
import { Box } from "@chakra-ui/layout";
import { customerMockData } from "../data/mockdata";
import { SearchBar } from "../components/SearchBar";
import { Filter } from "../components/Filter";
import { CustomerTable } from "../components/table/CustomerTable";
import { Pagination } from "../components/Pagination";
import OptionHeader from "../components/Headers";



const CustomerPage = () => {
    return (
        <Box w="100%" p="1.5rem" display="flex" flexDirection="column" gap="4">
            <OptionHeader optionHeaderData={customerMockData.OptionHeaderData}></OptionHeader>
            <SearchBar></SearchBar>
            <Filter></Filter>
            <Box w="fit" h="fit" overflow="hidden" borderRadius=".5rem" border="1px solid" borderColor="gray.300" bg="white">
                <CustomerTable></CustomerTable>
            </Box>
            <Box w="auto" position="absolute" bottom={6} left={"50%"} transform="translateX(-50%)">
                <Pagination></Pagination>
            </Box>
        </Box >
    )
};

export default CustomerPage;