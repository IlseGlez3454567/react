import { useState } from "react"

const UseState05 = () => {

    // State for the button text
    const [message, setMessage] = useState('Hacer click')

    // State for the input value
    const [newMessage, setNewMessage] = useState('')

    // Function triggered when the button is clicked
    const changeMessage = () => {

        // Update the button text with the input value
        // If input is empty, fallback to default text
        setMessage(newMessage || 'Hacer click')

        // Clear the input after updating
        setNewMessage('')
    }

    // Function triggered when the user types in the input
    const changeMessageInput = (event) => {

        // Update input state with current value
        setNewMessage(event.target.value)
    }

    return (
        <div>

            {/* Text input to change button label */}
            <input
                type="text"
                placeholder="Cambiar nombre de botón"

                // Controlled input: value linked to state
                value={newMessage}

                // Update state on every keystroke
                onChange={changeMessageInput}
            />

            {/* Button that updates its own text */}
            <button onClick={changeMessage}>

                {/* Display current message */}
                {message}

            </button>
        </div>
    )
}

export { UseState05 }