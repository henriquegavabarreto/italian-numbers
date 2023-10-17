import NumberInput from "../components/NumberInput"
import ActionButton from "../components/ActionButton"

const RangeSelection = ({ minNumber, maxNumber, setMinNumber, setMaxNumber, setPage}) => {
    return (
        <>
        <NumberInput name="Min" min="0" max="999999999989" value={minNumber} setValue={(value) => setMinNumber(value)}/>
        <NumberInput name="Max" min="10" max="999999999999" value={maxNumber} setValue={(value) => setMaxNumber(value)}/>
        <ActionButton text="GO" action={() => setPage("guess")}/>
        </>
    )
}

export default RangeSelection