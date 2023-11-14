import './App.css'
import { useState } from 'react'
import RangeSelection from './pages/RangeSelection'
import NumberGuessing from './pages/NumberGuessing'

function App() {
  let [minNumber, setMinNumber] = useState(0)
  let [maxNumber, setMaxNumber] = useState(10)
  let [page, setPage] = useState("select")

  function getRandomNumber () {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
}

  return (
    <div className="App">
      <h1 className="pageTitle">Italian Numbers</h1>
      <div className="pageContent">
        {page === 'select' && <RangeSelection 
                                minNumber={minNumber}
                                setMinNumber={setMinNumber}
                                maxNumber={maxNumber}
                                setMaxNumber={setMaxNumber}
                                setPage={setPage}/>}
        {page === 'guess' && <NumberGuessing
                                getRandomNumber={getRandomNumber}
                                setPage={setPage}/>}
      </div>
    </div>
  )
}

export default App
