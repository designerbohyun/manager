import React, { useState } from "react";
import { Box, Button, Radio } from "@chakra-ui/react";

type RadioButtonProps = {
    buttonText?: string;
    buttonId?: string;
    isChecked: boolean;
    onChange: (value: string) => void;
}

export const FilterRadioButton: React.FC<RadioButtonProps> = ({ buttonText = 'Default Text', buttonId = "1", isChecked, onChange }) => {
    const handleClick = () => {
        onChange(buttonId);
    };
    return (
        <Radio isChecked={isChecked} hidden>
            <Button
                variant="outline"
                size="sm"
                onClick={handleClick}
                bg={isChecked ? "cyan.50" : "gray.50"}
                _hover={{
                    bg: isChecked ? "cyan.100" : "gray.100",
                }}
                color={isChecked ? "cyan.600" : "gray.800"}
                colorScheme={isChecked ? "cyan" : "gray"}
                value={buttonId}
                borderRadius={"6.25rem"}
            >
                {buttonText}
            </Button>
        </Radio>
    );
};

export const FilterRadioGroup = () => {
    const [selectedValue, setSelectedValue] = useState("1");

    const handleChange = (value: string) => {
        setSelectedValue(value);
    }
    return (
        <Box>
            <FilterRadioButton buttonText="전체" buttonId="1" isChecked={selectedValue === "1"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄱ" buttonId="2" isChecked={selectedValue === "2"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄴ" buttonId="3" isChecked={selectedValue === "3"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄷ" buttonId="4" isChecked={selectedValue === "4"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄹ" buttonId="5" isChecked={selectedValue === "5"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅁ" buttonId="6" isChecked={selectedValue === "6"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅂ" buttonId="7" isChecked={selectedValue === "7"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅅ" buttonId="8" isChecked={selectedValue === "8"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅇ" buttonId="9" isChecked={selectedValue === "9"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅈ" buttonId="10" isChecked={selectedValue === "10"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅊ" buttonId="11" isChecked={selectedValue === "11"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅋ" buttonId="12" isChecked={selectedValue === "12"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅌ" buttonId="13" isChecked={selectedValue === "13"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅍ" buttonId="14" isChecked={selectedValue === "14"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅎ" buttonId="15" isChecked={selectedValue === "15"} onChange={handleChange}></FilterRadioButton>
        </Box>
    )
};
