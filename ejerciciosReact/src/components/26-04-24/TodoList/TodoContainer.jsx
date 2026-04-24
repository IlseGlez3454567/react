import { TodoHeader } from "./TodoHeader"
import { TodoList } from "./TodoList"


export const TodoContainer = () => {
    
    return(
        <div className="app-container">
            <TodoHeader/>
            <TodoList/>

        </div>
    )
}