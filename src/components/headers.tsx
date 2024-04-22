import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { PrimaryBtnIcon } from './buttons/button'
import { MdAdd } from 'react-icons/md'
import { GroupModalBtn } from "./modal/customermodal";
import { AddCustomerDrawer } from "./drawer/customerdrawer";

interface OptionHeaderProps {
    OptionHeaderData: {
        heading: string;
        description: string;
        OptionbuttonText: string;
    };
}

const OptionHeader: React.FC<OptionHeaderProps> = ({ OptionHeaderData }) => {
    return (
        <Box w="100%" pb={4} borderBottom="1px" borderBottomColor="gray.300">
            <Box w="100%" display="flex" justifyContent="space-between" alignItems="center">
                <Heading fontSize='2xl'>{`${OptionHeaderData.heading}`}</Heading>

                <Box w="fit" h="fit" display="flex" justifyContent="center" alignItems="center" gap={2}>
                    <GroupModalBtn></GroupModalBtn>
                    <AddCustomerDrawer></AddCustomerDrawer>
                </Box>
            </Box>
            <Text color="gray.600" mt={3}>{`${OptionHeaderData.description}`}</Text>
        </Box>
    )
};

export default OptionHeader;


interface DefaultHeaderProps {
    DefaultHeaderData: {
        heading: string;
        description: string;
        DefaultbuttonText: string;
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
                    {/* <PrimaryBtnIcon leftIcon={<MdAdd />} buttonText={`${DefaultHeaderData.DefaultbuttonText}`}></PrimaryBtnIcon> */}
                    <AdditionalComponent />
                </Box>
            </Box>
            <Text color="gray.600" mt={3}>{`${DefaultHeaderData.description}`}</Text>
        </Box>
    )
};