import React from 'react';
import styled from 'styled-components';

function Stepper({ tt, index, stepCount }) {
  const StepWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 90%;
      top: 25%;
      right: 55%;
      transform: translate(0%, -50%);
      ${index === 1 && 'display:none'}
      ${stepCount >= index ? 'background-color: #17a2b8' : 'background-color: red'};
    }
  `;
  const TitleCircle = styled.p`
    height: 30px;
    width: 30px;
    text-align: center;
    border-radius: 50%;
    color: white;
    ${stepCount >= index ? 'background-color: #17a2b8' : 'background-color: gray'};
    z-index: 999;
  `;

  return (
    <StepWrapper>
      <TitleCircle>{index}</TitleCircle>
      <p className="m-3">{tt.title}</p>
    </StepWrapper>
  );
}

export default Stepper;
