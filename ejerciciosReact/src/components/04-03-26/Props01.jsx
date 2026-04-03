import { useState } from "react"



const PropsExersice01 = () => {
    // Aquí guardo cuántas veces se ha hecho clic en TOTAL (todos los botones juntos)
    const [count, setCount] = useState(0)
    // Esta función se ejecuta cada vez que alguien le da clic a cualquier botón
    function onAdd() {
        // Toma el número actual y le suma 1
        setCount(count + 1)
        //count + 1 → usa un valor que puede estar “viejo”
        //prev => prev + 1 → usa el valor más actualizado, se recomienda más
    }

    return (
        <div>
            <h1>Total: {count}</h1>
              {/* Le pasamos la función onAdd a cada botón, todos suman al mismo contador*/}
            <Product onAdd={onAdd} />
            <Product onAdd={onAdd} />
            <Product onAdd={onAdd} />
        </div>
    )
     // Este es el botón (componente hijo)
    function Product({ onAdd }) {

        return (
            // Cuando se hace clic, ejecuta la función que viene del padre
            <button onClick={onAdd}>
                Agregar
            </button>
        )
    }
}

export { PropsExersice01 }
