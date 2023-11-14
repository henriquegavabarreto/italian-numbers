import "./ActionButton.css"

const ActionButton = ({ text, action }) => {
    return (
        <>
        <button
            className="actionButton"
            onClick={() => action()}>{text}</button>
        </>
    )
}

export default ActionButton