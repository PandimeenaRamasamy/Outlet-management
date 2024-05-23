  import React, { useState, useEffect } from 'react';
  import './StepperForm.css'; // Import your CSS file
  import { BiNotepad } from "react-icons/bi";
  import { PiNotepadBold } from "react-icons/pi";
  import { CiLocationOn } from "react-icons/ci";
  import { TfiNotepad } from "react-icons/tfi";
  import Footerbar from '../../Footer/Footerbar';
  import RestaurantDetails from "../Restaurant Details/RestaurantDetails"
  import Fssai from '../../Fssai/Fssai';

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
      { title: 'Restaurant Details', component: <RestaurantDetails />, icon: <BiNotepad className='image' /> },
      { title: 'Location', component: <Payment />, icon: <CiLocationOn className='image' /> },
      { title: 'FSSAI', component: <Fssai />, icon: <PiNotepadBold className='image' /> },
      { title: 'Bank Details', component: <Signup />, icon: <TfiNotepad className='image' /> },
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

    const handleNextStep = () => {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    };

    const progress = ((visitedSteps.filter(step => step).length) / steps.length) * 100;

    return (
      <div className="page-content">
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
                  {step.icon}
                  <div className='icon-text'>{step.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='component-container'>
          {steps[activeStep].component} 
        </div>
        <div className='btn-container'>
          <div className='btn-footer'>
            <div>
              <button className='clear_all'>Clear ALL</button>
            </div>
            <div>
              <button className='save_next' onClick={handleNextStep}>Save & Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default StepperForm;
