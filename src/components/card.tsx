import React from "react";
import { Box, HStack } from "@chakra-ui/layout";
import { Text } from '@chakra-ui/react'

type CardProps = {
    CardData: {
        label: string;
        icon: string;
        money: string;
        bgColor: string;
        borderColor: string;
        textColor: string;
    };
}

const DefaultCard: React.FC<CardProps> = ({ CardData }) => {
    return (
        <Box w="full" h="fit" border="1px solid" borderColor="gray.300" borderRadius=".5rem" bgColor="white" p="1.5rem" display="flex" flexDirection="column" alignItems="start" justifyContent="center" gap="1.5rem">
            <Text textAlign="left" fontWeight="600" textColor="gray.500">{`${CardData.label}`}</Text>
            <Box w="full" display="flex" justifyContent="space-between" alignItems="center">
                <HStack border="1px solid" w="3.125rem" h="3.125rem" borderRadius="100" display="flex" justifyContent="center" alignItems="center" fontSize="20px" bgColor={`${CardData.bgColor}`} borderColor={`${CardData.borderColor}`} textColor={`${CardData.textColor}`}>
                    {`${CardData.icon}`}
                </HStack>
                <Text fontSize="1.5rem" fontWeight="800">{`${CardData.money}`}</Text>
            </Box>
        </Box>
    )
};

export default DefaultCard;