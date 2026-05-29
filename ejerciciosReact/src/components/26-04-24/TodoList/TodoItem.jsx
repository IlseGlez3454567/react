import { FaTrash, FaPen, FaCheck } from "react-icons/fa"
export const TodoItem = ({ id, title, hour, date, deleteTask, toogleTask, completed, editTask }) => {

    return (
        <div className="item-card">
            <div className="item-content-info">
                <div className="image-item" onClick={() => toogleTask(id)}>
                    {completed && <FaCheck />}
                    {/* muestra el icono solo si la tarea está completada */}
                    {/*if(completed){
                         mostrar icono
                    } */}
                </div>
                <div>
                    <h2 className={completed ? "item-title completed" : "item-title"}>{title}</h2>
                    <div>
                        <span className="item-hour">{hour}</span>
                        <span className="item-date">{date}</span>
                    </div>
                </div>
            </div>
            <div className="item-content-buttons">
                <button className="item-button" onClick={() => deleteTask(id)}><FaTrash /></button>
                <button className="item-button"
                    onClick={() => {editTask(id) }}>
                    <FaPen /></button>
            </div>
        </div>
    )
}