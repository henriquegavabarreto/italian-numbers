import './App.css'
import { useState } from 'react'
import ActionButton from './components/ActionButton'
import RangeSelection from './pages/RangeSelection'
import NumberGuessing from './pages/NumberGuessing'

function App() {
  let [minNumber, setMinNumber] = useState(0)
  let [maxNumber, setMaxNumber] = useState(10)
  let [page, setPage] = useState("select")
  return (
    <div className="App">
      <h1>Italian Numbers</h1>
      {page === 'select' && <RangeSelection 
                              minNumber={minNumber}
                              setMinNumber={setMinNumber}
                              maxNumber={maxNumber}
                              setMaxNumber={setMaxNumber}
                              setPage={setPage}/>}
      {page === 'guess' && <NumberGuessing setPage={setPage}/>}
      <ActionButton text="I log" action={() => console.log("I work as intended.")}/>
      <ActionButton text="I alert" action={() => alert("I work as intended.")}/>
      <button onClick={() => console.log(`validate min and max, and generate random number between ${minNumber} and ${maxNumber}`)}>Start</button>
    </div>
  )
}

export default App
