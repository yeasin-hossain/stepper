/* eslint-disable react/no-array-index-key */
import React from 'react';
import Stepper from './Stepper';

function CustomStepper({ title, stepCount }) {
  return (
    <div style={{ display: 'flex' }}>
      {title.map((tt, index) => (
        <Stepper tt={tt} key={index} index={index + 1} stepCount={stepCount} />
      ))}
    </div>
  );
}

export default CustomStepper;
