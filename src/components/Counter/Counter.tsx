import React, { useState } from "react";
import { CounterProps } from "./Counter.types";
import ButtonCount from "../ButtonCount";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const Counter: React.FC<CounterProps> = ({ visibleWrapper,width,Count,bgColorCounter,colorText,colorButton }) => {
  const [count, setCount] = useState(Count);
  const handleClick = (type:string) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
    console.log("visibleWrapper:", visibleWrapper);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width:width||"25%",
        justifyContent: "space-between",
        padding: "8px",
        backgroundColor:visibleWrapper?bgColorCounter:"transparent",
        borderRadius: "50px",
        border:visibleWrapper?"2px solid rgba(128, 128, 128, 0.384)":"none"
      }}
    >
      <ButtonCount onClickButton={handleClick} type="plus" bgColor={'red'} />
      <Typography color={colorText}>{count}</Typography>
      <ButtonCount onClickButton={handleClick} type="minus" bgColor={'red'}  />
    </Box>
  );
};
export default Counter;
