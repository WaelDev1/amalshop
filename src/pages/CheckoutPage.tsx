import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CheckoutPage.css'
import ShipAddress from '../components/ShipAddress/ShipAddress';
import DeliveryMethod from '../components/DeliveryMethod/DeliveryMethod';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import ConfirmPopup from '../components/ConfirmPopup/ConfirmPopup';

const steps = ['Cart', 'Address & Delivery', 'Payment'];



const ChekoutPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

   
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
    
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
             <ConfirmPopup active={true} />
        </React.Fragment>
      ) : (
        <React.Fragment>
           {activeStep === 0 && ('this 0 componenet')}
                      {activeStep === 1 && (
                         <> 
                            <h4>Ship Address</h4>
                            <ShipAddress/>
                            <h4>Choose delivery Method</h4>
                            <DeliveryMethod />
                         </>
                      )}

                      {activeStep === 2 && (
                        <>
                          <OrderSummary/>
                        </>
                      )}
                      

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep > 0 &&             <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              back
            </Button>}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ChekoutPage
