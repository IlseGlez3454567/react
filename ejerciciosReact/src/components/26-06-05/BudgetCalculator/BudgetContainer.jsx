import { BudgetSummary } from "./BudgetSummary"
import { ExpenseFilter } from "./ExpenseFilter"
import { ExpenseForm } from "./ExpenseForm"
import { ExpenseList } from "./ExpenseList"
import { useState } from "react"


export const BudgetContainer = () => {

    const [expenses, setExpenses] = useState([
        {
            id: 1,
            title: "Netflix",
            category: "Entretenimiento",
            date: "15/06/2024",
            amount: 220,
            imagen: "/icons/netflix.png"
        },
        {
            id: 2,
            title: "Spotify",
            category: "Entretenimiento",
            date: "14/06/2024",
            amount: 170,
            image: "/icons/spotify.png"
        }

    ])
    //función para agregar nuevos gastos
    const addExpense = (expense) => {
        setExpenses((prev) => [expense, ...prev])
        // prev = estado anterior (los gastos que ya existen)
        // agregamos el nuevo gasto al inicio del array
        // copiamos todos los gastos anteriores
    }
    const deleteExpense = (id) => {
        setExpenses((prev) =>
            prev.filter((expense) => expense.id !== id)
            //crea un nuevo array sin el elemento que tenga ese id
        )
    }

    const [selectedCategory, setSelectedCategory] = useState("Todos")

    // Crear una lista de gastos filtrada según la categoría seleccionada
    const filteredExpenses = 
    selectedCategory === "Todos"
    // si el usuario selecciona "Todos", se muestra el arreglo completo de gastos
    ? expenses
    // si se selecciona una categoría específica,
    // filter recorre el arreglo y devuelve únicamente
    // los gastos cuya categoría coincida con la seleccionada
    : expenses.filter(
        (expense) => expense.category === selectedCategory
    )

    return (
        <div>
            <ExpenseForm addExpense={addExpense} />
            <ExpenseFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
            <ExpenseList
                expenses={filteredExpenses}
                deleteExpense={deleteExpense}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory} />
            <BudgetSummary />
        </div>
    )
}