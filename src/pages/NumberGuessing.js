import { useRef, useState } from "react"
import ActionButton from "../components/ActionButton"
import { getCardinalNumber } from "../lib/cardinalNumber"

const NumberGuessing = ({ getRandomNumber, setPage }) => {
    let [randomNumber, setRandomNumber] = useState(getRandomNumber)
    let [isGraded, setIsGraded] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false);
    let [correctAnswer, setCorrectAnswer] = useState("")
    let guess = useRef()

    function handleClick () {
        // If it was already graded, generate new random number,
        // set graded to false and reset guess
        if (isGraded) {
            setRandomNumber(getRandomNumber)
            setIsGraded(false)
            guess.current.value = ""
            return
        }

        // Check if user guess is correct
        let answer = getCardinalNumber(randomNumber)

        if (guess.current.value === answer) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
            setCorrectAnswer(answer)
        }

        setIsGraded(true)      
    }

    // Executes handleClick when enter is pressed in the input box
    function handleKeyUp(e) {
        if (e.code === 'Enter') {
            handleClick()
        }
    }

    return (
        <>
        <ActionButton text="<<" action={() => setPage('select')}/>
        <h1>{randomNumber}</h1>
        <h3>{ !isGraded ? "____________" : isCorrect ? "Giusto!" : correctAnswer }</h3>
        <input
            type="text"
            placeholder="numero"
            ref={guess}
            onKeyUp={e => handleKeyUp(e)}/>
        <ActionButton text=">>" action={handleClick}/>
        </>
    )
}

export default NumberGuessing