import { useState } from "react"

const Props02 = () => {

    // total global (suma de todos los productos)
    const [total, setTotal] = useState(0)

    // Esta función la ejecuta el HIJO (Product)
    // "value" es un dato que el hijo nos manda
    function handleAdd(value) {

        // Aquí usamos ese "value"
        // Ejemplo: si value = 1 → suma 1 al total
        setTotal(prev => prev + value)
    }

    return (
        <div>
            {/* mostramos el total */}
            <h1>Total general: {total} productos </h1>

            {/* 
            Aquí le pasamos la función al hijo
            el hijo podrá usarla y mandarnos datos
            */}
            <Product name="Producto A" onAdd={handleAdd} />
            <Product name="Producto B" onAdd={handleAdd} />
            <Product name="Producto C" onAdd={handleAdd} />
        </div>
    )

    function Product({ name, onAdd }) {

        // contador propio del producto
        const [count, setCount] = useState(0)

        function handleClick() {

            // aumenta su propio contador
            setCount(prev => prev + 1)

            // le manda un dato al padre
            // ESTE ES EL ORIGEN DE "value"
            onAdd(1)
        }

        return (
            <button onClick={handleClick}>
                {name} ({count})
            </button>
        )
    }
}

export { Props02 }
