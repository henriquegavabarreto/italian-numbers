import "./NumberInput.css"

const NumberInput = ({ name, min, max, value, setValue, hasStyle }) => {
    return (
        <div>
            <label className="numberInputLabel">{name}</label>
            <input
                className={hasStyle ? "invalidInput" : ""}
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={e => setValue(e.target.value)}/>
        </div>
    )
}

export default NumberInput