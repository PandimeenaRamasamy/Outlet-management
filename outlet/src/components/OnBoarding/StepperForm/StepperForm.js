import React, { useState, useEffect } from 'react';
import './StepperForm.css'; // Import your CSS file
import { BiNotepad } from "react-icons/bi";
import { PiNotepadBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { TfiNotepad } from "react-icons/tfi";

function UserDetails() {
  return <h2>User details</h2>;
}

function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}

function Signup() {
  return <h2>Signup</h2>;
}

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  

  const steps = [
    { title: 'User details', component: <UserDetails />, image: <BiNotepad className='image' /> },
    { title: 'Payment', component: <Payment />, image: <CiLocationOn className='image' /> },
    { title: 'Booking confirmation', component: <Confirmation />, image: <PiNotepadBold className='image' />  },
    { title: 'Sign Up', component: <Signup />, image: <TfiNotepad className='image' /> },
  ];
  const [visitedSteps, setVisitedSteps] = useState(new Array(steps.length).fill(false));

  useEffect(() => {
    const updatedVisitedSteps = [...visitedSteps];
    updatedVisitedSteps[activeStep] = true;
    setVisitedSteps(updatedVisitedSteps);
  }, [activeStep]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const progress = ((visitedSteps.filter(step => step).length) / steps.length) * 100;

  return (
    <div className='container'>
    <div className='sub-container'>
      <div className="stepper-progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === activeStep ? 'active' : ''} ${visitedSteps[index] ? 'visited' : ''}`}
            onClick={() => handleStepClick(index)}
          >
            {step.image}
          </div>
        ))}
      </div>
      <div className="step-content">
        {steps[activeStep].component}
        <div className="step-buttons">
          {activeStep < steps.length - 1 && (
            <button className="next-button" onClick={() => setActiveStep(activeStep + 1)}>Next</button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default StepperForm;
