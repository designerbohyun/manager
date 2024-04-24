import React from "react";
import { Select } from "@chakra-ui/select";
import { Box, Text } from "@chakra-ui/react";

export const IconSelect = () => {
    return (
        <Select size="md" variant="outline" _focus={{ border: "none", ring: "2", ringColor: "cyan.400", }} placeholder='옵션을 선택해주세요.' sx={{ paddingLeft: "40px" }}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    )
};

export const GroupSelect = ({ Label = "그룹" }) => {
    return (
        <Box w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
            </Box>
            <Select w="100%" size="md" variant="outline" placeholder="그룹을 선택해주세요." _focus={{ border: "none", ring: "2", ringColor: "cyan.400", }} >
                <option>주요 회원</option>
            </Select>
        </Box>
    )
};

