import React from "react";
import { Box } from "@chakra-ui/layout";
import { DefaultInput } from "./Inputs";
import { PrimaryButton } from "./buttons/BasicButton";
import { MdCall, MdPerson, MdGroups } from "react-icons/md";
import { IconSelect } from "./Select";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";

export const SearchBar = () => {
    return (
        <Box w="100%" p="4" bg="white" borderRadius=".5rem" border="1px solid" borderColor="gray.300" display="flex" justifyItems="center" alignItems="center" gap="3">
            <InputGroup >
                <InputLeftElement pointerEvents="none" color="gray.500">
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