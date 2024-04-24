import React from "react";
import { Box } from "@chakra-ui/layout";
import { DefaultInput } from "./inputs";
import { PrimaryButton } from "./buttons/Button";
import { MdCall, MdPerson, MdGroups } from "react-icons/md";
import IconSelect from "./select";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";

const SearchBar = () => {
    return (
        <Box w="100%" p="4" bg="white" borderRadius=".5rem" border="1px solid" borderColor="gray.300" display="flex" justifyItems="center" alignItems="center" gap="3">
            <InputGroup >
                <InputLeftElement pointerEvents="none">
                    <MdGroups />
                </InputLeftElement>
                <IconSelect></IconSelect>
            </InputGroup>

            <DefaultInput placeHolder="이름을 입력해주세요." Icon={<MdPerson />}></DefaultInput>
            <DefaultInput placeHolder="전화번호를 입력해주세요." type="number" Icon={<MdCall />}></DefaultInput >
            <Box>
                <PrimaryButton buttonText='검색'></PrimaryButton>
            </Box>
        </Box >
    )
};

export default SearchBar;