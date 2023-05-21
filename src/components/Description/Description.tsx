import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import { DescriptionProps } from "./Description.types";

import "./Description.css";

const Description: React.FC<DescriptionProps> = ({ title, desc,secColor }) => (
  <div>
    <Accordion  className="description-accordion">
      <AccordionSummary
        expandIcon={<Icon icon="material-symbols:expand-more" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="accordion-summary"

      >
        <div className="descTitleWrapper"  style={{color:secColor}}>{title}</div> {/* update margin style */}
      </AccordionSummary>
      <AccordionDetails className="accordion-details" > {/* update padding and margin styles */}
          <div style={{color:secColor}}>{desc}
          </div>
          
      </AccordionDetails>
    </Accordion>
  </div>
);

export default Description;
