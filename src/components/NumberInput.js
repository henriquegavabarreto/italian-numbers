const NumberInput = ({ name, min, max, value, setValue }) => {
    return (
        <div className="numberInput">
            <label className="numberInputLabel">{name}</label>
            <input
                className="numberInputBox"
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={e => setValue(e.target.value)}/>
        </div>
    )
}

export default NumberInput