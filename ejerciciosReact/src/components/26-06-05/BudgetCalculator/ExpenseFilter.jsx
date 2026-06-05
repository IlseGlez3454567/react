

export const ExpenseFilter = ({selectedCategory, setSelectedCategory}) => {

    return (
        <div className="expense-filter-container">
            <h2>Lista de gastos</h2>
            <div className="categories-list">
                <div className="category-content">
                    <input 
                    className="category-radio" 
                    type="radio" 
                    name="category" 
                    value="Todos"
                    checked={selectedCategory==="Todos"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    ></input>
                    <label>Todos</label>
                    <h4 className="category-total-items">(1)</h4>
                </div>
                <div className="category-content">
                    <input 
                    className="category-radio" 
                    type="radio" name="category" 
                    value="Entretenimiento"
                    checked={selectedCategory === "Entretenimiento"}
                    onChange={(e) => setSelectedCategory(e.target.value)}></input>
                    <label>Entretenimiento</label>
                    <h4 className="category-total-items">(1)</h4>
                </div>
                <div className="category-content">
                    <input 
                    className="category-radio" 
                    type="radio" name="category" 
                    value="Transporte"
                    checked={selectedCategory === "Transporte"}
                    onChange={(e) => setSelectedCategory(e.target.value)}></input>
                    <label>Transporte</label>
                    <h4 className="category-total-items">(1)</h4>
                </div>
                <div className="category-content">
                    <input 
                    className="category-radio" 
                    type="radio" 
                    name="category" 
                    value="Comida"
                    checked={selectedCategory === "Comida"}
                    onChange={(e) => setSelectedCategory(e.target.value)}></input>
                    <label>Comida</label>
                    <h4 className="category-total-items">(1)</h4>
                </div>
                <div className="category-content">
                    <input 
                    className="category-radio" 
                    type="radio" 
                    name="category" 
                    value="Servicios"
                    checked={selectedCategory === "Servicios"}
                    onChange={(e) => setSelectedCategory(e.target.value)}></input>
                    <label>Servicios</label>
                    <h4 className="category-total-items">(1)</h4>
                </div>
            </div>
        </div>
    )
}