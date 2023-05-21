import React, { useState, useRef } from "react";
import { ColorsProps } from "./Colors.types";
import { Icon } from '@iconify/react';
import Box from "@mui/material/Box";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Colors.css";

const Colors = ({ oneClick, title, colors, secColor }: ColorsProps) => {
  const [selectedColors, setSelectedColors] = useState(
    oneClick ? ["Black"] : []
  );


  const handleColorClick = (color:any) => {
    if (oneClick) {
      // Select only one color if oneClick is true
      if (selectedColors.includes(color)) {
        setSelectedColors([]);
      } else {
        setSelectedColors([color]);
      }
    } else {
      // Select multiple colors if oneClick is false
      if (selectedColors.includes(color)) {
        setSelectedColors(selectedColors.filter((c) => c !== color));
      } else {
        setSelectedColors([...selectedColors, color]);
      }
    }
  };

  return (
    <Box>
      <h3 className="title-wrapper" style={{color:secColor}}>{title}</h3>
        <div className="keen-slider" style={{width:'300px'}}  >
          {colors.map((el, i) => (
            <Box className="color-wrapper keen-slider__slide" key={i}>
              <button
                style={{
                  border: "1px solid grey",
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                  backgroundColor: el,
                  position: "relative",
                }}
                onClick={() => handleColorClick(el)}
              >
                {selectedColors.includes(el) && (
                  
                    <Icon
                      width="30"
                      icon="material-symbols:check-small-rounded"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '16px',
                        color: el === 'Black' ? '#fff' : '#000', // set color based on selected color
                      }}
                    />
                
                )}
              </button>
              <p className="colors-name" style={{color:secColor}}>{el}</p>
            </Box>
          ))}
        </div>
    </Box>
  );
};

export default Colors;
