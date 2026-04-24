import { TodoItem } from "./TodoItem"


export const TodoList = () => {
    return (
        <div className="app-list">
            <TodoItem 
                title="Create a react project" 
                hour="5:23 AM" 
                date="01/06/2022" 
            />
            <TodoItem 
                title="Learn React <3"
                hour="5:22 AM" 
                date="05/06/2022"
            />
            <TodoItem 
                title="Create a Todo App"
                hour="5:21 AM" 
                date="08/06/2022"
            />
        </div>
    )
}