/* eslint-disable react-hooks/immutability */
export const ThirdExercise = () => {

    let counter = 0

    function subtractNumber() {
        if (counter > -10) {
            counter -= 1
            document.getElementById("counterSecond").innerText = counter
        }
    }

    function addNumber() {
        if (counter < 10) {
            counter += 1
            document.getElementById("counterSecond").innerText = counter
        }
    }

    return (
        <div>
            <h1 id="counterSecond">{counter}</h1>
            <button onClick={subtractNumber}>Restar</button>
            <button onClick={addNumber}>Sumar</button>
        </div>
    )
}