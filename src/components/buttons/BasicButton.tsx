import { Button } from '@chakra-ui/react';
import { MdAdd, MdEdit, MdMenu } from 'react-icons/md';

export const PrimaryButton = ({ buttonText = 'Default Text' }) => {
    return (
        <Button colorScheme="cyan" size="md" variant="solid" color="white" fontWeight="700" w={"Number"}>
            {buttonText}
        </Button>
    );
};

export const PrimaryButtonIcon = ({ leftIcon = <MdAdd />, buttonText = 'Default Text' }) => {
    return (
        <Button colorScheme="cyan" size="md" variant="solid" leftIcon={leftIcon} color="white" fontWeight="700">
            {buttonText}
        </Button>
    );
};


export const SecondaryButton = ({ buttonText = 'Default Text' }) => {
    return (
        <Button colorScheme="gray" size="md" variant="outline" color="gray.600" fontWeight="700" borderColor="gray.300">
            {buttonText}
        </Button>
    );
};

export const TeritaryButton = ({ leftIcon = <MdMenu />, buttonText = 'Default Text', w = "fit" }) => {
    return (
        <Button w={w} colorScheme="gray" size="md" variant="ghost" color="gray.600" leftIcon={leftIcon} fontWeight="500" _active={{ color: "gray.800" }} _focus={{ color: "gray.800", fontWeight: "700" }} display="flex" justifyContent="start" alignItems="center" fontSize=".875rem">
            {buttonText}
        </Button>
    );
};


export const DeleteButton = ({ buttonText = 'Default Text' }) => {
    return (
        <Button colorScheme="red" size="md" variant="solid" fontWeight="600">
            {buttonText}
        </Button>
    );
};

export const IconButton = ({ Icon = <MdEdit /> }) => {
    return (
        <Button colorScheme="gray" size="md" variant="ghost" color="gray.800" fontSize="lg" fontWeight="700" w="2.5rem" p="0">
            {Icon}
        </Button>
    );
};


export const NumButton = ({ Num = 1 }) => {
    return (
        <Button colorScheme="gray" size="md" variant="outline" fontWeight="600" _active={{ backgroundColor: "cyan.500", textColor: "white" }} _focus={{ backgroundColor: "cyan.500", textColor: "white" }}>
            {Num}
        </Button>
    );
};
