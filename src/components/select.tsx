import React from "react";
import { Select } from "@chakra-ui/select";

const DefaultSelect = () => {
    return (
        <Select size="md" variant="outline" _focus={{ border: "none", ring: "2", ringInset: "", ringColor: "cyan.400", }} placeholder='Select option'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    )
};

export default DefaultSelect;