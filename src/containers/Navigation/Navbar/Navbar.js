import React from "react";
import {NavbarStyled} from "./Navbar.styled";

export const Navbar = () => (
    <NavbarStyled>
        <ul>
            <li className={"chosen"}>Home</li>
            <li>Catalog</li>
            <li>Cart</li>
        </ul>
    </NavbarStyled>
)


