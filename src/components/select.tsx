import React from "react";
import { Select } from "@chakra-ui/select";

const IconSelect = () => {
    return (
        <Select size="md" variant="outline" _focus={{ border: "none", ring: "2", ringColor: "cyan.400", }} placeholder='Select option' sx={{ paddingLeft: "40px" }}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    )
};

export default IconSelect;