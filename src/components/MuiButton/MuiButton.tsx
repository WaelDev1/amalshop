// Generated with util/create-component.js
import React from "react";
import Button from "@mui/material/Button";

import { MuiButtonProps } from "./MuiButton.types";

import "./MuiButton.css";

const MuiButton: React.FC<MuiButtonProps> = (props) => (
    <Button{...props}>{props.children} </Button>
);

export default MuiButton;

