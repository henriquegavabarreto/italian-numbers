import NumberInput from "../components/NumberInput"
import ActionButton from "../components/ActionButton"

const RangeSelection = ({ minNumber, maxNumber, setMinNumber, setMaxNumber, setPage}) => {
    return (
        <>
        <NumberInput name="Min" min="0" max="999999999989" value={minNumber} setValue={(value) => setMinNumber(parseInt(value))}/>
        <NumberInput name="Max" min="10" max="999999999999" value={maxNumber} setValue={(value) => setMaxNumber(parseInt(value))}/>
        <ActionButton text=">>" action={() => setPage("guess")}/>
        </>
    )
}

export default RangeSelection