import { Badge } from "@chakra-ui/layout";
import React from "react";

export const GroupBadge = ({ badgeText = 'Default Text' }) => {
    return (
        <Badge size="lg" px={3} py={1} borderRadius="100" variant="outline" colorScheme="cyan" bg="cyan.50">{badgeText}</Badge>
    )
};
