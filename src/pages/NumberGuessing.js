import ActionButton from "../components/ActionButton"

const NumberGuessing = ({ setPage }) => {
    return (
        <>
        <h1>This is number guessing</h1>
        <ActionButton text="BACK" action={() => setPage('select')}/>
        </>
    )
}

export default NumberGuessing