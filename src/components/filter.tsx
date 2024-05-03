import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import { FilterRadioGroup } from "./buttons/FilterRadioButton";

export const Filter = () => {
    return (
        <Box w="fit" p="4" bg="white" borderRadius=".5rem" border="1px solid" borderColor="gray.300" display="flex" justifyItems="center" alignItems="center" gap="3">
            <FilterRadioGroup></FilterRadioGroup>
        </Box>
    )
}