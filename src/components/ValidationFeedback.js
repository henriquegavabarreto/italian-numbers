const ValidationFeedback = ({ correct, text }) => {
    return (
        <div>
            <span>{correct ? "✅" : "❌"}</span>
            {text}
        </div>
    )
}

export default ValidationFeedback