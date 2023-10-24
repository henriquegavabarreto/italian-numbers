import NumberInput from "../components/NumberInput"
import ActionButton from "../components/ActionButton"

const RangeSelection = ({ minNumber, maxNumber, setMinNumber, setMaxNumber, setPage}) => {
    const minInput = {
        min: 0,
        max: 999999999989
    }

    const maxInput = {
        min: 10,
        max: 999999999999
    }

    function handleClick () {
        let isInputValid = true
        
        // check if minNumber is in valid range
        if (minNumber < minInput.min || minNumber > minInput.max) {
            console.log("Invalid min number")
            // give visual feedback to the user
            isInputValid = false
        }

        // check if maxNumber is in valid range
        if (maxNumber < maxInput.min || maxNumber > maxInput.max) {
            console.log("invalid max number")
            // give visual feedback to the user
            isInputValid = false
        }

        // be sure that min < max
        if(minNumber > maxNumber) {
            console.log("Max number should be greater than min number")
            // give visual feedback to the user
            isInputValid = false
        }

        if (!isInputValid) return

        setPage("guess")
    }
    return (
        <>
        <NumberInput
            name="Min"
            min={minInput.min}
            max={minInput.max}
            value={minNumber}
            setValue={(value) => setMinNumber(parseInt(value))}/>
        <NumberInput
            name="Max"
            min={maxInput.min}
            max={maxInput.max}
            value={maxNumber}
            setValue={(value) => setMaxNumber(parseInt(value))}/>
        <ActionButton text=">>" action={handleClick}/>
        </>
    )
}

export default RangeSelection