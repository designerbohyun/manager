import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import CheckboxBtn from "./buttons/CheckBox";
import { CheckboxGroup } from "@chakra-ui/react";

const Filter = () => {
    return (
        <Box w="fit" p="4" bg="white" borderRadius=".5rem" border="1px solid" borderColor="gray.300" display="flex" justifyItems="center" alignItems="center" gap="3">
            <Text textColor="gray.500" fontSize="sm" cursor="default">필터</Text>
            <CheckboxGroup>
                <CheckboxBtn buttonText="ㄱ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㄴ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㄷ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㄹ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅁ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅂ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅅ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅇ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅈ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅊ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅋ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅌ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅍ" ></CheckboxBtn>
                <CheckboxBtn buttonText="ㅎ" ></CheckboxBtn>
            </CheckboxGroup>

        </Box>
    )
}

export default Filter;