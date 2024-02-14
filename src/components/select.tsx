import React from "react";
import { Select } from "@chakra-ui/select";
import { Icon } from "@chakra-ui/icon";
import { MdGroup } from "react-icons/md";

const DefaultSelect = () => {
    return (
        <Select as="select" style={{
            paddingLeft: "2.5rem"
        }} size="md" w="100%" _focus={{ ring: "2px", ringColor: "cyan.400", border: "0px" }} variant="outline" colorScheme="cyan" placeholder='그룹을 선택해주세요.' >
            <option value='option1'>주요 고객</option>
            <option value='option2'>노쇼족</option>
            <option value='option3'>비회원 고객</option>
        </Select >
    )
};

export default DefaultSelect;