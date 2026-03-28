// Import useState from React
// useState lets us store and update data (state) inside the component
import { useState } from "react"

// Define a functional component
const UseStateInput02 = () => {

    // State for the first input
    // number01 → current value
    // setNumber01 → function to update it
    // '' → initial value (empty)
    const [number01, setNumber01] = useState('')

    // State for the second input
    const [number02, setNumber02] = useState('')

    // State to store the result of the sum
    const [result, setResult] = useState('')

    // Function that runs when the button is clicked
    const sumNumbers = () => {

        // parseFloat converts strings to numbers
        // inputs always return strings, even if type="number"
        const sum = parseFloat(number01) + parseFloat(number02)

        // Update the result state
        // this triggers a re-render in React
        setResult(sum)
    }

    // JSX: what gets rendered on the screen
    return (
       <div>

            {/* INPUT 1 */}
            <input 
                type="number" // allows only numeric input
                placeholder="Enter a number" 

                // value connects the input to the state
                // this makes it a "controlled component"
                value={number01} 

                // onChange runs when the user types
                // updates the state with the input value
                onChange={(event) => setNumber01(event.target.value)}
            />

            {/* INPUT 2 */}
            <input 
                type="number"
                placeholder="Enter a number" 
                value={number02}

                // store the second input value
                onChange={(event) => setNumber02(event.target.value)}
            />

            {/* BUTTON */}
            <button onClick={sumNumbers}>
                Add
            </button>

            {/* DISPLAY RESULT */}
            {/* React updates this automatically when "result" changes */}
            <p>Result: {result}</p>
        
       </div>
    )
}

// Export the component so it can be used in other files
export { UseStateInput02 }