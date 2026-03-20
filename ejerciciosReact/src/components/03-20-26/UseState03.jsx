import { useState } from "react"

const UseState03 = () => {

    const [message, setMessage] = useState('Hacer Click')
    const [displayMessageA, setDisplayMessageA] = useState(true)

    const alternateMessage = () => {
        setDisplayMessageA(!displayMessageA)
        setMessage(displayMessageA ? 'Hola' : 'Adios')

    }

    return (
        <div>
            <button onClick={alternateMessage}>{message}</button>
        </div>
    )
}

export { UseState03 }