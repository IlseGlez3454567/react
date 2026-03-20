import { useState } from "react"


const UseState04 = () => {

    const [message, setMessage] = useState('Hacer Click')
    const [displayMessageA, setDisplayMessageA] = useState(true)
    const [bgColor , setBgColor] = useState('green')

    const alternateMessage = () => {
        setDisplayMessageA(!displayMessageA)
        setMessage (displayMessageA ? 'Hola' : 'Adios')
        setBgColor (bgColor === 'green' ? 'blue' : 'green')

    }
    return (
        <div style = {{backgroundColor: bgColor}}>
          <button onClick={alternateMessage}>{message}</button>
        </div>
    )
}

export { UseState04 }