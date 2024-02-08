import React from "react";
import { InputGroup, Input } from "@chakra-ui/input";
import { InputLeftElement } from "@chakra-ui/react";
import { Md10K } from "react-icons/md";

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
