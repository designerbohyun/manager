import React, { useState } from "react";
import { Box, Button, Radio } from "@chakra-ui/react";

type RadioButtonProps = {
    buttonText?: string;
    ButtonId?: string;
    isChecked: boolean;
    onChange: (value: string) => void;
}

export const FilterRadioButton: React.FC<RadioButtonProps> = ({ buttonText = 'Default Text', ButtonId = "1", isChecked, onChange }) => {
    const handleClick = () => {
        onChange(ButtonId);
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
                value={ButtonId}
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
            <FilterRadioButton buttonText="전체" ButtonId="1" isChecked={selectedValue === "1"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄱ" ButtonId="2" isChecked={selectedValue === "2"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄴ" ButtonId="3" isChecked={selectedValue === "3"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄷ" ButtonId="4" isChecked={selectedValue === "4"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㄹ" ButtonId="5" isChecked={selectedValue === "5"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅁ" ButtonId="6" isChecked={selectedValue === "6"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅂ" ButtonId="7" isChecked={selectedValue === "7"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅅ" ButtonId="8" isChecked={selectedValue === "8"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅇ" ButtonId="9" isChecked={selectedValue === "9"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅈ" ButtonId="10" isChecked={selectedValue === "10"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅊ" ButtonId="11" isChecked={selectedValue === "11"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅋ" ButtonId="12" isChecked={selectedValue === "12"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅌ" ButtonId="13" isChecked={selectedValue === "13"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅍ" ButtonId="14" isChecked={selectedValue === "14"} onChange={handleChange}></FilterRadioButton>
            <FilterRadioButton buttonText="ㅎ" ButtonId="15" isChecked={selectedValue === "15"} onChange={handleChange}></FilterRadioButton>
        </Box>
    )
};
