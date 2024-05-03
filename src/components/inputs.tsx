import React, { useState } from "react";
import { InputGroup, Input } from "@chakra-ui/input";
import { InputLeftElement, InputRightAddon, InputRightElement, Textarea, Tooltip } from "@chakra-ui/react";
import { Md10K, MdInfoOutline } from "react-icons/md";
import { Text, Box } from "@chakra-ui/layout";
import { MemberRadioGroup } from "./buttons/aradiobutton";

export const DefaultInput = ({ Icon = <Md10K />, placeHolder = "PlaceHolder를 입력해주세요", type = "text" }) => {
    return (
        <InputGroup>
            <InputLeftElement color="gray.500">
                {Icon}
            </InputLeftElement>
            <Input size="md" bg="white" w="100%" textOverflow="ellipsis" focusBorderColor="cyan.400" placeholder={placeHolder} type={type}></Input>
        </InputGroup>
    );
};

export const RequiredInput = ({ Type = "text", Label = "라벨", Required = "[필수]", Placeholder = "~을 입력해주세요.", Description = "설명을 입력해주세요.", Maxlength = 20 }) => {
    return (
        <InputGroup w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
                <Text fontSize="sm" fontWeight="700" color="cyan.500">{Required}</Text>
            </Box>
            <Input type={Type} maxLength={Maxlength} focusBorderColor="cyan.400" placeholder={Placeholder} ></Input>
            <Text fontSize="xs" color="gray.500" >{Description}</Text>
        </InputGroup>
    )
};

export const MemberInput = ({ Label = "회원 여부", Required = "[필수]" }) => {
    return (
        <Box w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
                <Text fontSize="sm" fontWeight="700" color="cyan.500">{Required}</Text>
                <Tooltip label={<>• 비회원 : 1회 혹은 가끔 서비스를 받는 고객<br />• 회원 : 정기적으로 서비스를 받는 고객</>}
                    placement="bottom" fontSize='xs' px={4} py={2} borderRadius={6}>
                    <Box w={4} h={4} color="cyan.600" fontSize="lg">
                        <MdInfoOutline />
                    </Box>
                </Tooltip>
            </Box>
            <MemberRadioGroup></MemberRadioGroup>
        </Box>
    );
};

export const EtcField = ({ Label = "기타사항" }) => {
    return (
        <Box w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
            </Box>
            <Textarea placeholder="내용을 입력해주세요.(최대 80자)" minHeight="9rem" resize="vertical" _focus={{ border: "none", ring: "2", ringColor: "cyan.400", }} maxLength={80}></Textarea>
        </Box>
    )
};

export const MemberPriceInput = ({ Label = "회원권 금액", Unit = "원", Required = "[필수]" }) => {
    return (
        <Box w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
                <Text fontSize="sm" fontWeight="700" color="cyan.500">{Required}</Text>
            </Box>
            <InputGroup>
                <Input type="number" focusBorderColor="cyan.400" placeholder="0" />
                <InputRightElement pointerEvents="none" children="원" />
            </InputGroup>
        </Box>
    )
};

export const NonMemberPriceInput = ({ Label = "비회원가", Unit = "원", Required = "[필수]" }) => {
    return (
        <Box w="100%" display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={2}>
            <Box display="flex" justifyContent="start" alignItems="center" gap={2} cursor="default">
                <Text fontSize="sm" fontWeight="700" color="gray.500" >{Label}</Text>
                <Text fontSize="sm" fontWeight="700" color="cyan.500">{Required}</Text>
            </Box>
            <InputGroup>
                <Input type="number" focusBorderColor="cyan.400" placeholder="0" />
                <InputRightElement pointerEvents="none" children="원" />
            </InputGroup>
        </Box>
    )
};