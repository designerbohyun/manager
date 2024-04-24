import React, { useState } from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Pagination = ({ BeforeIcon = <MdChevronLeft />, AfterIcon = <MdChevronRight /> }) => {

    // 목업 데이터
    const mockupData = [
        { id: 1, content: 'Data 1' },
        { id: 2, content: 'Data 2' },
        { id: 3, content: 'Data 3' },
        { id: 4, content: 'Data 4' },
        { id: 5, content: 'Data 5' },
    ];

    return (
        <HStack>
            <Button
                variant="outline"
                colorScheme="gray"
                size="md"
                w="2.5rem"
                p="0"
                bg="white"

            >
                {BeforeIcon}
            </Button>
            {mockupData.map((item) => (
                <Button
                    key={item.id}
                    variant="outline"
                    bg="white"
                    colorScheme="gray"
                    _focus={{ bg: "cyan.500", color: "white" }}
                >
                    {item.id}
                </Button>

            ))}
            <Button
                variant="outline"
                colorScheme="gray"
                size="md"
                w="2.5rem"
                p="0"
                bg="white"
            >
                {AfterIcon}
            </Button>
        </HStack>
    );
};
