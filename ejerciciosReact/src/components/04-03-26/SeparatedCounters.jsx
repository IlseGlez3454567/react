import { useState } from "react"


const SeparatedCounters = () => {

    function MyButton() {

        const [count, setCount] = useState(0)

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
    return (
        <div>
            <MyButton></MyButton>
            <MyButton></MyButton>
        </div>
    )


}

export { SeparatedCounters }
