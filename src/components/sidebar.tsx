import React from "react";
import { Box, Link } from "@chakra-ui/layout";
import { TeritaryBtn } from "./buttons/button";
import { MdCalendarToday, MdOutlineInventory2 } from 'react-icons/md';
import { Image } from '@chakra-ui/react'
import AccordionBtn from "./accordion";

interface SidebarProps {
    onButtonClick: (page: string) => void;
}

export const SideBar = () => {
    return (
        <Box minW="14.375rem" maxW="14.375rem" h="100%" py={4} px={3} borderRight="1px" borderRightColor="gray.200" boxShadow="md" backgroundColor="white" display="flex" flexDirection="column" gap={2}>
            <Link><Image src="./assets/logo.png" alt="Manager Logo"></Image></Link>
            <TeritaryBtn w="100%" leftIcon={<MdCalendarToday />} buttonText="예약 현황"></TeritaryBtn>
            <AccordionBtn></AccordionBtn>
            <TeritaryBtn w="100%" leftIcon={<MdOutlineInventory2 />} buttonText="상품 관리"></TeritaryBtn>
        </Box>
    )
}

