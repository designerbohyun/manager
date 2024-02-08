import React from "react";
import { Box } from "@chakra-ui/layout";
import { DefaultHeader } from "../components/headers";
import { productMockData } from "../data/mockdata";
import { productCardMockData } from "../data/mockdata";
import DefaultCard from "../components/card";
import { Tab } from "@mui/base";
import Pagination from "../components/pagination";
import CustomerTable from "../components/table";

const ProductListPage = () => {
    return (
        <Box w="100%" p="1.5rem" display="flex" flexDirection="column" gap="4">
            <DefaultHeader DefaultHeaderData={productMockData.DefaultHeaderData}></DefaultHeader>
            <Box w="full" display="flex" justifyContent="space-between" alignItems="center" gap="1rem">
                {productCardMockData.map((productCardMockData, index) => (
                    <DefaultCard CardData={productCardMockData}></DefaultCard>
                ))}
            </Box>
            <Box w="fit" h="fit" overflow="hidden" borderRadius=".5rem" border="1px solid" borderColor="gray.300" bg="white">
                <CustomerTable></CustomerTable>
            </Box>
            <Box w="full" display="flex" justifyContent="center" alignItems="center" position="absolute" bottom={6} left={1 / 2} translateX={-1 / 2}>
                <Pagination></Pagination>
            </Box>
        </Box>
    )
};

export default ProductListPage;