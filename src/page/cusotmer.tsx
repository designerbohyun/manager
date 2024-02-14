import React from "react";
import { Box } from "@chakra-ui/layout";
import { customerMockData } from "../data/mockdata";
import SearchBar from "../components/searchBar";
import Filter from "../components/filter";
import DefaultTable from "../components/table";
import Pagination from "../components/pagination";
import OptionHeader from "../components/headers";
import DeleteModal from "../components/modal/modal";
import { InfoAlert } from "../components/toast";


const CustomerPage = () => {
    return (

        <Box w="100%" p="1.5rem" display="flex" flexDirection="column" gap="4">
            <OptionHeader OptionHeaderData={customerMockData.OptionHeaderData}></OptionHeader>
            <SearchBar></SearchBar>
            <Filter></Filter>
            <Box w="fit" h="fit" overflow="hidden" borderRadius=".5rem" border="1px solid" borderColor="gray.300" bg="white">
                <DefaultTable></DefaultTable>
            </Box>
            <Box w="full" display="flex" justifyContent="center" alignItems="center" position="absolute" bottom={6} left={1 / 2} translateX={-1 / 2}>
                <Pagination></Pagination>
            </Box>
        </Box >
    )
};

export default CustomerPage;