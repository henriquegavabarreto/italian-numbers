import NumberInput from "../components/NumberInput"
import ActionButton from "../components/ActionButton"
import { useState } from "react"
import ValidationFeedback from "../components/ValidationFeedback"
import "./RangeSelection.css"

const RangeSelection = ({ minNumber, maxNumber, setMinNumber, setMaxNumber, setPage}) => {
    let [minInputStyle, setMinInputStyle] = useState(false)
    let [maxInputStyle, setMaxInputStyle] = useState(false)
    let [feedback, setFeedback] = useState({ minFeedback: {}, maxFeedback: {}})

    // define min and max values for min and max inputs
    const minInput = {
        min: 0,
        max: 999999999989
    }

    const maxInput = {
        min: 10,
        max: 999999999999
    }

    function handleClick () {
        // define min and max feedback, which will have text feedback and if the validation is being fullfilled
        // format: { string: boolean }
        // { "Is minimum input less than maximum input": true }
        let minFeedback = {}
        let maxFeedback = {}

        // Assume all inputs are currently valid
        setMinInputStyle(false)
        setMaxInputStyle(false)
        let isInputValid = true
        
        // check if minNumber is valid in the following scenarios
        // min >= minimum required (and a number)
        minFeedback[`min >= ${minInput.min}`] = minNumber >= minInput.min && !isNaN(minNumber)
        // min <= maximum possible (and a number)
        minFeedback[`min <= ${minInput.max}`] = minNumber <= minInput.max && !isNaN(minNumber)
        // minNumber <= maxNumber
        minFeedback["min <= max"] = minNumber <= maxNumber

        // if any condition is false
        if (Object.values(minFeedback).includes(false)) {
            // apply a visual feedback to Min NumberInput
            setMinInputStyle(true)
            isInputValid = false
        }

        // Check if maxNumber is valid in the following scenarios
        // max >= minimum required (and a number)
        maxFeedback[`max >= ${maxInput.min}`] = maxNumber >= maxInput.min && !isNaN(maxNumber)
        // max <= maximum possible (and a number)
        maxFeedback[`max <= ${maxInput.max}`] = maxNumber <= maxInput.max && !isNaN(maxNumber)
        // maxNumber >= minNumber
        maxFeedback["max >= min"] = maxNumber >= minNumber
        
        // if any condition is false
        if (Object.values(maxFeedback).includes(false)) {
            // apply visual feedbackto Max NumberInput
            setMaxInputStyle(true)
            isInputValid = false
        }

        // apply changes to feedback
        setFeedback({minFeedback, maxFeedback})

        if (!isInputValid) return

        // Load NumberGuessing component if both inputs are valid
        setPage("guess")
    }
    return (
        <div className="rangeSelectionPage">
            <NumberInput
                hasStyle={minInputStyle}
                name="Min"
                min={minInput.min}
                max={minInput.max}
                value={minNumber}
                setValue={(value) => setMinNumber(parseInt(value))}/>
            <div className="feedbackBox">
                {Object.keys(feedback.minFeedback).map(key => (
                    <div key={key} className="feedbackItem">
                        <ValidationFeedback className="feedbackItem" key={key} text={key} valid={feedback.minFeedback[key]}/>
                    </div>
                ))}
            </div>
            <NumberInput
                hasStyle={maxInputStyle}
                name="Max"
                min={maxInput.min}
                max={maxInput.max}
                value={maxNumber}
                setValue={(value) => !isNaN(value) && setMaxNumber(parseInt(value))}/>
            <div className="feedbackBox">
                {Object.keys(feedback.maxFeedback).map(key => (
                    <div key={key} className="feedbackItem">
                        <ValidationFeedback text={key} valid={feedback.maxFeedback[key]}/>
                    </div>
                ))}
            </div>
            <ActionButton text=">>" action={handleClick}/>
        </div>
    )
}

export default RangeSelection