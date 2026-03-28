import { useState } from "react"

const UseStateInput01 = () => {

    // State to store the user's text input
    const [text, setText] = useState('')

    // Maximum number of characters allowed
    const limitCharacters = 50

    // Function triggered on every input change
    const updateText = (event) => {

        // Get the current value from the input field
        const newText = event.target.value

        // Update the state with the new text
        setText(newText)
    }

    // Calculate remaining characters
    const charactersRest = limitCharacters - text.length

    return (
        <div>

            {/* Text input field */}
            <input
                type="text"
                placeholder="Escribe aquí"

                // Controlled input: value is linked to state
                value={text}

                // Update state when user types
                onChange={updateText}

                // Limit the number of characters allowed
                maxLength={limitCharacters}
            />

            {/* Display remaining characters */}
            <p>Caracteres restantes : {charactersRest}</p>

        </div>
    )
}

export { UseStateInput01 }