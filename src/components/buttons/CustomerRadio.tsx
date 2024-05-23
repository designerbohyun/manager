import React, { useState } from "react";
import { Box, Checkbox, Radio, Text } from "@chakra-ui/react";
import { GroupBadge } from "../Badge";

type RadioBtnProps = {
    name?: string;
    phone?: string;
    customerId?: string;
    isChecked: boolean;
    onChange: (id: string) => void;
};

export const CustomerRadio: React.FC<RadioBtnProps> = ({ name = '이름', phone = "010-1234-5678", customerId = "1", isChecked, onChange }) => {
    const handleClick = () => {
        onChange(customerId);
    };

    const handleCheckboxClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Radio isChecked={isChecked} display="grid" hidden>
            <Box
                onClick={handleClick}
                borderBottom="1px solid"
                borderColor="gray.100"
                bg={isChecked ? "cyan.50" : "white"}
                _hover={{
                    bg: isChecked ? "cyan.100" : "gray.50",
                }}
                color={isChecked ? "cyan.700" : "gray.800"}
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
            >
                <Checkbox colorScheme="cyan" isChecked={isChecked} onClick={handleCheckboxClick} />
                <Box w="100%">
                    <Text fontSize="xs" color="gray.500" w="70%" overflow="hidden" textOverflow="ellipsis" mb={1}>비회원</Text>
                    <Text fontSize="sm" fontWeight="700" w="70%" overflow="hidden" textOverflow="ellipsis" mb={1}>{name}</Text>
                    <Text fontSize="sm" color="gray.500" w="100%" overflow="hidden" textOverflow="ellipsis" mb={2}>{phone}</Text>
                    <GroupBadge />
                </Box>
            </Box>
        </Radio>
    );
};

export const CustomerRadioItem = () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (customerId: string) => {
        setSelectedValue(customerId);
    }
    return (
        <Box>
            <CustomerRadio name="이름이 들어갑니다." customerId="1" isChecked={selectedValue === "1"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="2" isChecked={selectedValue === "2"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="3" isChecked={selectedValue === "3"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="4" isChecked={selectedValue === "4"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="5" isChecked={selectedValue === "5"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="6" isChecked={selectedValue === "6"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="7" isChecked={selectedValue === "7"} onChange={handleChange}></CustomerRadio>
            <CustomerRadio name="이름이 들어갑니다." customerId="8" isChecked={selectedValue === "8"} onChange={handleChange}></CustomerRadio>
        </Box>
    )
};
