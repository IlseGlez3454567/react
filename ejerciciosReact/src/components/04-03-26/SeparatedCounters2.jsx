import { useState } from "react"


const SeparatedCounters2 = () => {
    const [count, setCount] = useState(0)
    
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <div>
            <MyButton count={count} onClick={handleClick}></MyButton>
            <MyButton count={count} onClick={handleClick}></MyButton>
        </div>
    )


}
function MyButton({ count, onClick }) {
    //equivalente a esto
   /* function MyButton(props) {
        const count = props.count
        const onClick = props.onClick
      }*/
    
    return (
        <div>
            <button onClick={onClick}>
                Clic {count} times
            </button>
        </div>
    )

}

export { SeparatedCounters2 }
