import { useState } from "react"

const UseState02 = () => {

    const [textButton, setTextButton] = useState('Hacer Click')

    const changeText = () => {
        setTextButton(textButton === 'Hacer Click' ? 'Click Hecho' : 'Hacer Click')
    }

    return (
        <div>
            <button onClick={changeText}>{textButton}</button>
        </div>
    )
}

export { UseState02 }