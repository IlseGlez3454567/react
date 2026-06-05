import { useState } from "react"

//recibe la función addTask desde el componente padre TodoContainer
export const TodoHeader = ({ addTask, filter, setFilter }) => {
    //estado para almacenar el título de la nueva tarea
    const [taskTitle, setTaskTitle] = useState("")
    return (
        <div className="app-header">
            <h1 className="app-title">TODO LIST</h1>
            <div className="header-actions">
                <div className="new-task-content">
                    <input
                        className="new-task-input"
                        type="text"
                        placeholder="Añadir nueva tarea..."
                        //conecta el valor del input con el estado taskTitle
                        //el input siempre mostrará el valor actual del estado
                        value={taskTitle}
                        //onChange -> se ejecuta cada vez que el usuario escribe algo
                        //event.target.value obtiene el texto actual del input
                        //setTaskTitle actualiza el estado con ese valor
                        onChange={(event) => setTaskTitle(event.target.value)}

                    />
                    {/* al hacer clic ejecuta la función addTask */}
                    <button className="app-button"
                        onClick={() => {
                            addTask(taskTitle) //ejecuta la función addTask del componente padre TodoContainer, envia el valor actual de taskTitle
                            //limpia el input después de agregar la tarea
                            setTaskTitle("")

                        }}
                    >Add Task</button>
                </div>
                <select 
                className="app-filter-button"
                value={filter}
                onChange={(event) => setFilter(event.target.value)} // event.target.value -> valor actual del input
                >
                    <option value="todas">Todas  </option>
                    <option value="pendientes">Pendientes  </option>
                    <option value="completadas">Completadas  </option>
                </select>
            </div>
        </div>
    )
}