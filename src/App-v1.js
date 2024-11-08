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
      <Steps></Steps>
      <Steps></Steps>
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
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <button style={ step === 1 ? {backgroundColor: 'grey', color: '#fff' } : {backgroundColor: '#7950F2', color: '#fff' }} onClick={ handlePrevious } >Previous</button>
          <button style={step === 3 ? {backgroundColor: 'grey', color: '#fff' } : {backgroundColor: '#7950F2', color: '#fff'}} onClick={ handleNext }>Next</button>
        </div>
      </div>
    )}
    </div>
  )
}