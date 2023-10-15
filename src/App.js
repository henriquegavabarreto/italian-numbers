import './App.css'
import { useState } from 'react'
import NumberInput from './components/NumberInput'
import ActionButton from './components/ActionButton'

function App() {
  let [minNumber, setMinNumber] = useState(0)
  let [maxNumber, setMaxNumber] = useState(10)
  return (
    <div className="App">
      <h1>Italian Numbers</h1>
      <NumberInput name="Min" min="0" max="999999999989" value={minNumber} setValue={(value) => setMinNumber(value)}/>
      <NumberInput name="Max" min="10" max="999999999999" value={maxNumber} setValue={(value) => setMaxNumber(value)}/>
      <ActionButton text="I log" action={() => console.log("I work as intended.")}/>
      <ActionButton text="I alert" action={() => alert("I work as intended.")}/>
      <button onClick={() => console.log(`validate min and max, and generate random number between ${minNumber} and ${maxNumber}`)}>Start</button>
    </div>
  )
}

export default App
