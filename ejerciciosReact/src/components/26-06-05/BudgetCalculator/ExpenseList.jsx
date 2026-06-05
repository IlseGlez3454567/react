import { ExpenseItem } from "./ExpenseItem"



export const ExpenseList = ({ expenses , deleteExpense}) => {
    return (
        <div className="expense-list">
            {
                //map recorre el array y por cada elemento crea un componente ExpenseItem
                expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}//react necesita una key única para identificar elementos en listas
                        expense={expense}
                        deleteExpense={deleteExpense}
                    />
                ))
            }
        </div>
    )
}