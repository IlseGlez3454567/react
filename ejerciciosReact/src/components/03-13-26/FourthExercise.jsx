import { useState } from "react"

const FourthExercise = () => {
    const [counter, setCounter] = useState(0)

    function subtract() {
        setCounter(counter - 1)
    }
    function add() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={subtract} disabled={counter === -10}>Restar</button>
            <button onClick={add} disabled={counter === 10}>Sumar</button>
        </div>
    )
}

export { FourthExercise }