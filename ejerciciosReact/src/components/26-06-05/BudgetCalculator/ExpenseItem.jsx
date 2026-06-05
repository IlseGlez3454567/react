

export const ExpenseItem = ({expense, deleteExpense}) => {

    return(
        <div className="expense-item">
            <div className="expense-content-name">
                <div className="expense-image-content">
                    <img className="expense-image" alt="icono"></img>
                    <h3 className="expense-title">{expense.title}</h3>
                </div>
                <h3 className="expense-category">{expense.category}</h3>
                <h3 className="expense-date">{expense.date}</h3>
                <h3 className="expense-amount">{expense.amount}</h3>
                <div className="expense-actions">
                    <div className="expense-icon">
                        <img alt="editar"></img>
                    </div>
                    <button onClick={() => deleteExpense(expense.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}