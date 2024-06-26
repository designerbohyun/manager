import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { GroupModalBtn } from "./modal/CustomerModal";
import { AddCustomerDrawer } from "./drawer/CustomerDrawer";

type OptionHeaderProps = {
    optionHeaderData: {
        heading: string;
        description: string;
    };
}

const OptionHeader: React.FC<OptionHeaderProps> = ({ optionHeaderData }) => {
    return (
        <Box w="100%" pb={4} borderBottom="1px" borderBottomColor="gray.300">
            <Box w="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Heading fontSize='2xl'>{`${optionHeaderData.heading}`}</Heading>

                <Box w="fit" h="fit" display="flex" justifyContent="center" alignItems="center" gap={2}>
                    <GroupModalBtn></GroupModalBtn>
                    <AddCustomerDrawer></AddCustomerDrawer>
                </Box>
            </Box>
            <Text color="gray.600" mt={3}>{`${optionHeaderData.description}`}</Text>
        </Box>
    )
};

export default OptionHeader;


interface DefaultHeaderProps {
    DefaultHeaderData: {
        heading: string;
        description: string;
        AdditionalComponent: React.FC;
    };
}

export const DefaultHeader: React.FC<DefaultHeaderProps> = ({ DefaultHeaderData }) => {
    const AdditionalComponent = DefaultHeaderData.AdditionalComponent;
    return (
        <Box w="100%" pb={4} borderBottom="1px" borderBottomColor="gray.300">
            <Box w="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Heading fontSize='2xl'>{`${DefaultHeaderData.heading}`}</Heading>

                <Box w="fit" h="fit" display="flex" justifyContent="center" alignItems="center" gap={2}>
                    <AdditionalComponent />
                </Box>
            </Box>
            <Text color="gray.600" mt={3}>{`${DefaultHeaderData.description}`}</Text>
        </Box>
    )
};