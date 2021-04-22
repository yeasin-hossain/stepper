import { useState } from "react";
import CustomStepper from "./CustomStpper/CustomStepper";


function App() {
  const [stepCount, setStepCount] = useState(1);
  const handlePrev = () => {
    if (stepCount > 1) {
      setStepCount(stepCount - 1);
    }
  };

  return (
    <div >
      <CustomStepper title={[
        { title: 'Step One' },
        { title: 'Step Two' },
        { title: 'Step Three' },
        { title: 'Step Four' },
      ]}
        stepCount={stepCount} />
      <button onClick={handlePrev}>Prev</button>
      {stepCount <= 3 ? (
        <button onClick={() => setStepCount(stepCount + 1)} type="button" className="btn btn-primary m-2">
          Next
        </button>
      ) : (
        <button type="button" className="btn btn-primary m-2">
          submit
        </button>
      )}
    </div>
  );
}

export default App;
