import React, { useState } from "react";
import { Box, Button, Radio } from "@chakra-ui/react";

type RadioButtonProps = {
    buttonText?: string;
    ButtonId?: string;
    isChecked: boolean;
    onChange: (value: string) => void;
}

export const MemberRadio: React.FC<RadioButtonProps> = ({ buttonText = 'Default Text', ButtonId = "1", isChecked, onChange }) => {
    const handleClick = () => {
        onChange(ButtonId);
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
                value={ButtonId}
            >
                {buttonText}
            </Button>
        </Radio>
    );
};

export const MemberRadioGroup = () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    }
    return (
        <Box>
            <MemberRadio buttonText="비회원" ButtonId="1" isChecked={selectedValue === "1"} onChange={handleChange}></MemberRadio>
            <MemberRadio buttonText="회원" ButtonId="2" isChecked={selectedValue === "2"} onChange={handleChange}></MemberRadio>
        </Box>
    )
};
