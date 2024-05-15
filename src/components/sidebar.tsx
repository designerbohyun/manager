import React from "react";
import { Box, Link } from "@chakra-ui/layout";
import { TeritaryButton } from "./buttons/Button";
import { MdCalendarToday, MdOutlineInventory2 } from 'react-icons/md';
import { Img } from '@chakra-ui/react';
import { AccordionBtn } from "./Accordion";

type SidebarProps = {
    onButtonClick: (page: string) => void;
}

export const SideBar = () => {
    return (
        <Box w="14.375rem" h="100%" py={4} px={3} borderRight="1px" borderRightColor="gray.200" boxShadow="md" backgroundColor="white" display="flex" flexDirection="column" gap={2}>
            <Link w="70%" px={4} my={2}><Img src="https://i.imgur.com/DpCyo8z.png" alt="Manager Logo"></Img></Link>
            <TeritaryButton w="100%" leftIcon={<MdCalendarToday />} buttonText="예약 현황"></TeritaryButton>
            <AccordionBtn></AccordionBtn>
            <TeritaryButton w="100%" leftIcon={<MdOutlineInventory2 />} buttonText="상품 관리"></TeritaryButton>
        </Box>
    )
};

