import { useState } from "react"


export const ExpenseForm = ({addExpense}) => {

    // estados para controlar los inputs del formulario
    // cada input tiene su propio estado (controlled components)

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("Entretenimiento")

    // función que se ejecuta cuando el usuario envía el formulario
    const handleSubmit = (e) => {
         // evita que la página se recargue al hacer submit
        e.preventDefault()

         //  se crea el objeto del nuevo gasto con los datos del formulario
        const newExpense = {
            id: Date.now(), // id único basado en timestamp
            title: title, // valor del input concepto
            category: category, // valor del select
            date: new Date().toLocaleDateString(), // fecha actual
            amount: Number(amount) // convierte string a número
        }
        // se envía el nuevo gasto al componente padre (BudgetContainer)
        addExpense(newExpense)
        // limpiar form
        setTitle("")
        setAmount("")
        setCategory("Entretenimiento")
    }

    return (
        <div className="expense-create-container">
            <form onSubmit={handleSubmit}>
                <h2>Agregar nuevo gasto</h2>
                <div className="inputs-list">
                    <div className="input-content">
                        <h3 className="input-title">Concepto</h3>
                        <input 
                        type="text" 
                        className="input-box" 
                        placeholder="Ej. Netflix, Supermercado"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-content">
                        <h3 className="input-title">Monto</h3>
                        <input 
                        type="text" 
                        className="input-box" 
                        placeholder="Ej. 240.50"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="input-content">
                        <h3 className="input-title">Categoría</h3>
                        <select 
                        className="input-box"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Entretenimiento</option>
                            <option>Transporte</option>
                            <option>Comida</option>
                            <option>Servicios</option>
                        </select>
                    </div>
                    <button>+ Agregar</button>
                </div>
            </form>
        </div>
    )
}