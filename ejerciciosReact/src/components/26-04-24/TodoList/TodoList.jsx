
import { TodoItem } from "./TodoItem"


export const TodoList = ({ tasks, deleteTask, toogleTask, editTask }) => {

    return (
        <div className="app-list">
            {
                tasks.map((task) => (
                    //map recorre el array y por cada elemento crea un componente TodoItem
                    <TodoItem
                        key={task.id} //react necesita una key única para identificar elementos en listas
                        id={task.id}
                        title={task.title}
                        hour={task.hour}
                        date={task.date}
                        deleteTask={deleteTask}
                        toogleTask={toogleTask}
                        completed={task.completed}
                        editTask={editTask}
                    />
                ))
            }

        </div>
    )
}