import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
]

export default function App() {
  return (
    <div>
      <Steps></Steps>
      {/* <Steps></Steps> */}
    </div>
  )
}
function Steps() {

  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(s => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(s => s + 1);
  }

  return (

    <div>
    <button className="close" onClick={() => setIsOpen(is => !is)}>&times;</button>
    { isOpen && (   // && - false; || - true
      <div className="steps">
        <div className="numbers">
          <div className={ step >= 1 ? "active" : ""}>1</div>
          <div className={ step >= 2 ? "active" : ""}>2</div>
          <div className={ step >= 3 ? "active" : ""}>3</div>
        </div>
        
        <StepMessage step={step}> {messages[step - 1]}
          <div className="buttons">
            <Button bgColor="##777777" textColor="#fff" onClick={() => alert('Starting with React JS can be an exciting journey!')}>
              Learn how!
            </Button>
          </div>  
        </StepMessage>

        <div className="buttons">
          <Button bgColor="#7950F2" textColor="#fff" onClick={handlePrevious}><span>👈🏻</span>Previous</Button>
          <Button bgColor="#7950F2" textColor="#fff" onClick={handleNext}>Next<span>👉🏻</span></Button>
        </div>
      </div>
    )}
    </div>
  )
}

function StepMessage({step, children}) {
  return (
    <div className="message">
      <h3>Step {step}:</h3> 
      {children}
    </div>
  )
}

function Button({bgColor, textColor, onClick, children}) {
  return (
    <button style={{backgroundColor: bgColor, color: textColor }} onClick={ onClick }> {children} </button>
  )
}