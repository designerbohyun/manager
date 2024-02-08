import React, { useState } from "react";
import { Button, Radio, useColorModeValue, useColorMode } from "@chakra-ui/react";

const RadioBtn = ({ buttonText = 'Default Text' }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Radio isChecked={isChecked} hidden>
            <Button
                variant="outline"
                size="sm"
                onClick={handleClick}
                bg={isChecked ? "cyan.50" : "gray.50"}
                colorScheme={isChecked ? "cyan" : "gray"}
            >
                {buttonText}
            </Button>
        </Radio>
    );
};

export default RadioBtn;