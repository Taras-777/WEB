import React from "react";
import {LogoStyled} from "./Logo.styled";
import {StarOutlined} from "@ant-design/icons";

export const Logo = (props) => (
    <LogoStyled style={props.style}>
        <StarOutlined />
        Plane
    </LogoStyled>
);
