import React from "react";
import { Box } from "@chakra-ui/layout";
import { DefaultInput } from "./inputs";
import PrimaryBtn from "./buttons/button";
import { MdCall, MdPerson, MdGroups } from "react-icons/md";
import DefaultSelect from "./select";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";

const SearchBar = () => {
    return (
        <Box w="100%" p="4" bg="white" borderRadius=".5rem" border="1px solid" borderColor="gray.100" display="flex" justifyItems="center" alignItems="center" gap="3">
            <InputGroup h="fit-content" display="block" _peerFocus={{ border: "2px solid", borderColor: "cyan.400" }}>
                <InputLeftElement pointerEvents="none">
                    <MdGroups />
                </InputLeftElement>
                <DefaultSelect></DefaultSelect>
            </InputGroup>

            <DefaultInput placeHolder="이름을 입력해주세요." Icon={<MdPerson />}></DefaultInput>
            <DefaultInput placeHolder="전화번호를 입력해주세요." type="number" Icon={<MdCall />}></DefaultInput >
            <Box>
                <PrimaryBtn buttonText='검색'></PrimaryBtn>
            </Box>
        </Box >
    )
};

export default SearchBar;