import React from "react";
import { Icon } from '@iconify/react';
import { ButtonCountProps } from "./ButtonCount.types";
const ButtonCount: React.FC<ButtonCountProps> = ({ type, bgColor, onClickButton }) => {
  const handleClick = (type:string) => {
    onClickButton(type)
  };
  return (
    <button
      style={{
        color: "white",
        backgroundColor: bgColor,
        border: "none",
        borderRadius: "15px",
        padding:"5px",
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
      }}
      onClick={()=>handleClick(type)}
    >
      {type === "plus" ? <Icon icon="material-symbols:add" /> :  <Icon icon="ic:baseline-minus" />}
    </button>
  );
};
export default ButtonCount;

