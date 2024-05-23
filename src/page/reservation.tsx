import { Box } from "@chakra-ui/layout";
import React from "react";
import { DefaultHeader } from "../components/Headers";
import { reservationMockData } from "../data/mockdata";

const ReservationListPage = () => {
    return (
        <Box w="100%" p="1.5rem" display="flex" flexDirection="column" gap="4">
            <DefaultHeader DefaultHeaderData={reservationMockData.DefaultHeaderData}></DefaultHeader>
        </Box>
    )
};

export default ReservationListPage;