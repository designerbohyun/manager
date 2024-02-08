import React from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { TagLeftIcon } from "@chakra-ui/tag";
import { MdPeople } from "react-icons/md";

const mockAccordionData = [
    {
        title: '고객 관리',
        buttons: ['고객 목록', '서비스 이용 현황', '회원권 이용 내역 • 충전', '그룹 관리']
    },
];

const AccordionBtn = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple borderColor='transparent'>
            {mockAccordionData.map((accordionItem, index) => (
                <AccordionItem key={index}>
                    <h2>
                        <AccordionButton display="flex" justifyContent="center" alignItems="center" borderRadius="md" _hover={{ backgroundColor: "gray.100" }} _active={{ backgroundColor: "gray.100", fontWeight: "800" }} fontSize="0.875rem">
                            <Box as="span" display="flex" alignItems="center" textAlign='left' w='100%'>
                                <TagLeftIcon as={MdPeople} />
                                {accordionItem.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} display="flex" flexDirection="column" gap={1}>
                        {accordionItem.buttons.map((buttonText, i) => (
                            <Button key={i} w="100%" colorScheme="gray" variant="ghost" textAlign="left" justifyContent="flex-start" fontWeight="500" textColor="gray.600" fontSize=".875rem" _active={{ color: "gray.800" }} _focus={{ color: "gray.800", fontWeight: "700" }}>{buttonText}</Button>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
};

export default AccordionBtn;