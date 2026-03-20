import { useState } from "react"

const UseState01 = () => {
    
    const [textButton, setTextButton] = useState ('Hacer Click')

    const changeText = ()=>{
        setTextButton('Click Hecho')
    }

    return (
        <div>
           <button onClick={changeText}>{textButton}</button>
        </div>
    )
}

export { UseState01 }