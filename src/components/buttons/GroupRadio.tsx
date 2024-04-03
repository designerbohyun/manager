import React, { useState } from "react";
import { Box, Button, Radio, Text } from "@chakra-ui/react";

interface RadioBtnProps {
    groupname?: string;
    personcount?: number;
    description?: string;
    Title?: string;
    value?: string;
    id?: number;
    isChecked: boolean;
    onChange: (value: string) => void;
}

const GroupRadio: React.FC<RadioBtnProps> = ({ groupname = '그룹 명', personcount = 1, description = "그룹 설명", value = "1", isChecked, onChange }) => {
    const handleClick = () => {
        onChange(value);
    };
    return (
        <Radio isChecked={isChecked} display="grid" hidden >
            <Box
                onClick={handleClick}
                border="1px solid"
                borderColor={isChecked ? "cyan.500" : "gray.300"}
                bg={isChecked ? "cyan.50" : "white"}
                _hover={{
                    bg: isChecked ? "cyan.100" : "gray.50",
                }}
                color={isChecked ? "gray.800" : "gray.800"}
                p={4}
                borderRadius={4}
            >
                <Box w="100%" display="flex" justifyContent="space-between" alignItems="center" gap={2}>
                    <Text fontSize="md" fontWeight="700" w="70%" overflow="hidden" textOverflow="ellipsis">{groupname}</Text>
                    <Text fontSize="md" color="gray.500" display="flex" justifyContent="end" alignItems="center">{personcount}명</Text>
                </Box>
                <Text fontSize="sm" color="gray.500" w="100%" overflow="hidden" textOverflow="ellipsis">{description}</Text>
            </Box>
        </Radio>
    );
};
export default GroupRadio;

export const GroupRadioItem = () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    }
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <GroupRadio groupname="비회원" personcount={100} value="1" isChecked={selectedValue === "1"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="회원" personcount={90} value="2" isChecked={selectedValue === "2"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="비회원" personcount={10} value="3" isChecked={selectedValue === "3"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="회원" personcount={1} value="4" isChecked={selectedValue === "4"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="비회원" personcount={100} value="5" isChecked={selectedValue === "5"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="회원" personcount={90} value="6" isChecked={selectedValue === "6"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="비회원" personcount={10} value="7" isChecked={selectedValue === "7"} onChange={handleChange}></GroupRadio>
            <GroupRadio groupname="회원" personcount={1} value="8" isChecked={selectedValue === "8"} onChange={handleChange}></GroupRadio>
        </Box>
    )
};
