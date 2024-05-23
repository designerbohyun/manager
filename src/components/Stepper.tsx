import React from "react";
import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import { Step, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react";


export const ReservationStepper = () => {
    const steps = [
        { title: '고객 선택' },
        { title: '날짜 선택' },
        { title: '상품 선택' },
    ]

    return (
        <Stepper index={1} colorScheme="cyan">
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<Box w={2} h={2} borderRadius={10} bgColor="white"></Box>}
                            active={<Box w={2} h={2} borderRadius={10} bgColor="cyan.500"></Box>}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle>{step.title}</StepTitle>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )

};
