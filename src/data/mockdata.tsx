import React from "react";
import { AddCustomerDrawer } from "../components/drawer/customerdrawer";
import { AddGroupDrawer } from "../components/drawer/groupdrawer";
import { AddProductDrawer } from "../components/drawer/productdrawer";
import { MdBlock, MdStorefront } from "react-icons/md";

export const customerMockData = {
    OptionHeaderData: {
        heading: "고객 목록",
        description: "고객 목록은 비즈니스의 핵심 자산인 고객과의 소중한 연결을 강화하고, 효율적으로 관리할 수 있습니다.고객과의 관계를 개선하고, 손쉽게 효율적으로 관리해보세요.",
        OptionbuttonText: "그룹 이동",
    },
};

export const productMockData = {
    DefaultHeaderData: {
        heading: "상품 목록",
        description: "시스템에 손쉽게 새로운 상품을 추가하여 제품 라인을 확장하세요. 간편하고 직관적인 디자인을 통해 상품 관리로 비즈니스를 확장하고 다양한 선택을 고객에게 제공하세요.",
        AdditionalComponent: AddProductDrawer,
    }
};

export const groupMockData = {
    DefaultHeaderData: {
        heading: "그룹 목록",
        description: "그룹 기능을 활용하여 유사항 특성을 가진 고객을 손쉽게 그룹화하고, 특별한 혜택이나 맞춤형 마케팅을 제공하세요. 쉽고 직관적인 그룹 관리로 고객을 더 효과적으로 관리하세요.",
        DefaultbuttonText: "그룹 추가",
        AdditionalComponent: AddGroupDrawer,
    }
};



export const productCardMockData = [
    {
        label: "판매 중 상품",
        icon: <MdStorefront />,
        money: "100건",
        bgColor: "green.50",
        borderColor: "green.500",
        textColor: "green.600",
    },
    {
        label: "판매 중지 상품",
        icon: <MdBlock />,
        money: "0건",
        bgColor: "red.50",
        borderColor: "red.500",
        textColor: "red.600",
    },
]