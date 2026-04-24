

export const TodoHeader = () => {
    return (
        <div className="app-header">
            <h1 className="app-title">TODO LIST</h1>
            <div>
                <button className="app-button">Add Task</button>
                <select className="app-filter-button">
                    <option value="">All  </option>
                    <option value="">Opción 1  </option>
                    <option value="">Opción 2  </option>
                    <option value="">Opción 3  </option>
                </select>
            </div>
        </div>
    )
}