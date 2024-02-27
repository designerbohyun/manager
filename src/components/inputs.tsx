import React from "react";
import { InputGroup, Input } from "@chakra-ui/input";
import { InputLeftElement } from "@chakra-ui/react";
import { Md10K } from "react-icons/md";
import { Text, Box } from "@chakra-ui/layout";

export const DefaultInput = ({ Icon = <Md10K />, placeHolder = "PlaceHolder를 입력해주세요", type = "text" }) => {
    return (
        <InputGroup>
            <InputLeftElement>
                {Icon}
            </InputLeftElement>
            <Input size="md" bg="white" w="100%" textOverflow="ellipsis" focusBorderColor="cyan.400" placeholder={placeHolder} type={type}></Input>
        </InputGroup>
    );
};

export const RequiredInput = ({ Label = "라벨", Required = "[필수]", Placeholder = "~을 입력해주세요.", Description = "설명을 입력해주세요." }) => {
    return (
        <InputGroup w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
                <Text fontSize="sm" fontWeight="700" color="cyan.500">{Required}</Text>
            </Box>
            <Input type="text" maxLength={20} focusBorderColor="cyan.400" placeholder={Placeholder} ></Input>
            <Text fontSize="xs" color="gray.500" >{Description}</Text>
        </InputGroup>
    )
};