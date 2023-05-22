// Generated with util/create-component.js
import React from "react";
import Badge from '@mui/material/Badge';
import { CartIconProps } from "./CartIcon.types";
import { Icon } from '@iconify/react';
import "./CartIcon.css";

const CartIcon: React.FC<CartIconProps> = ({ count,bgstyle,secColor }) => {
    const iconColor = bgstyle.backgroundColor === "white" ? secColor : "white";
    return(
        <Badge  badgeContent={count} color="primary" className="cart" style={bgstyle} >
            <Icon icon="akar-icons:shopping-bag" width="36px" height="36px" style={{ color: iconColor }} />

        </Badge>
    )};

export default CartIcon;

