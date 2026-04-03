import { useState } from "react"

const NumberOfClicks = () => {

    const [count, setCount] = useState (0)
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>
                Clic {count} times
            </button>

        </div>
    )
}

export { NumberOfClicks }
