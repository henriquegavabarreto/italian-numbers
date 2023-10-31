const ValidationFeedback = ({ valid, text }) => {
    return (
        <div>
            <span>{valid ? "✅" : "❌"}</span>
            {text}
        </div>
    )
}

export default ValidationFeedback