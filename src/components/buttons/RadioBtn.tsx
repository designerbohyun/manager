import React, { useState } from "react";
import { Box, Button, Radio } from "@chakra-ui/react";

interface RadioBtnProps {
    buttonText?: string;
    Title?: string;
    value?: string;
    id?: number;
    isChecked: boolean;
    onChange: (value: string) => void;
}

const MemberRadio: React.FC<RadioBtnProps> = ({ buttonText = 'Default Text', value = "1", isChecked, onChange }) => {
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
export default MemberRadio;

export const MemberRadioGroup = () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    }
    return (
        <Box>
            <MemberRadio buttonText="비회원" value="1" isChecked={selectedValue === "1"} onChange={handleChange}></MemberRadio>
            <MemberRadio buttonText="회원" value="2" isChecked={selectedValue === "2"} onChange={handleChange}></MemberRadio>
        </Box>
    )
};
