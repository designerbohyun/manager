import React, { useState } from 'react';
import { Checkbox, Badge, Box } from '@chakra-ui/react';

export const SwitchStateButton = () => {
    const [isOn, setIsOn] = useState(false);
    const [badgeBgColor, setBadgeBgColor] = useState('gray.50'); // Badge의 bgColor 상태 추가
    const [boxBgColor, setBoxBgColor] = useState('gray.500'); // Box의 bgColor 상태 추가

    const toggleSwitch = () => {
        setIsOn(prevState => !prevState);
        setBadgeBgColor(prevColor => (prevColor === 'gray.50' ? 'green.50' : 'gray.50')); // Badge의 bgColor 변경
        setBoxBgColor(prevColor => (prevColor === 'gray.500' ? 'green.500' : 'gray.500')); // Box의 bgColor 변경
    };

    return (
        <label>
            <Checkbox isChecked={isOn} onChange={toggleSwitch} display="none"></Checkbox>
            <Badge
                cursor="pointer"
                size="lg"
                px={3}
                py={1}
                borderRadius="100"
                variant="outline"
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={1}
                colorScheme={isOn ? 'green' : 'gray'} // 스위치 상태에 따라 colorScheme 변경
                bg={badgeBgColor} // Badge의 bgColor 상태를 bg 속성에 바인딩
            >
                <Box w={1} h={1} borderRadius="50%" bg={boxBgColor}></Box> {/* Box의 bgColor 상태를 bg 속성에 바인딩 */}
                {isOn ? '활성화' : '비활성화'}
            </Badge>
        </label>
    );
};