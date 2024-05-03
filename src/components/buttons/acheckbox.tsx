import React, { useState } from "react";
import { Button, Checkbox, CheckboxGroup } from "@chakra-ui/react";

const CheckboxButton = ({ buttonText = 'Default Text' }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <CheckboxGroup>
            <Checkbox isChecked={isChecked} hidden></Checkbox>
            <Button
                variant="outline"
                size="sm"
                borderRadius="100"
                onClick={handleClick}
                colorScheme={isChecked ? "cyan" : "gray"}
                bg={isChecked ? "cyan.50" : "gray.50"}
            >
                {buttonText}
            </Button>
        </CheckboxGroup>
    );
};

export default CheckboxButton;