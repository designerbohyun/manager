import React, { useState } from "react";
import { Box, Button, Radio } from "@chakra-ui/react";

interface RadioBtnProps {
    buttonText?: string;
    value: string;
    isChecked: boolean;
    onChange: (value: string) => void;
}

const RadioBtn: React.FC<RadioBtnProps> = ({ buttonText = 'Default Text', value = "1", isChecked, onChange }) => {
    const handleClick = () => {
        onChange(value);
    };
    return (
        <Radio isChecked={isChecked} hidden>
            <Button
                variant="outline"
                size="md"
                onClick={handleClick}
                bg={isChecked ? "cyan.500" : "white"}
                _hover={{
                    bg: isChecked ? "cyan.600" : "gray.100",
                }}
                color={isChecked ? "white" : "gray.800"}
                colorScheme={isChecked ? "cyan" : "gray"}
                value={value}
            >
                {buttonText}
            </Button>
        </Radio>
    );
};

export default RadioBtn;

export const MemberRadioGroup = () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    }
    return (
        <Box>
            <RadioBtn buttonText="비회원" value="1" isChecked={selectedValue === "1"} onChange={handleChange}></RadioBtn>
            <RadioBtn buttonText="회원" value="2" isChecked={selectedValue === "2"} onChange={handleChange}></RadioBtn>
        </Box>
    )
}
