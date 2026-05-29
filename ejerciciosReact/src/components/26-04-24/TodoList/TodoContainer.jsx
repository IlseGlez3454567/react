import { TodoHeader } from "./TodoHeader"
import { TodoList } from "./TodoList"
import { useState } from "react"


export const TodoContainer = () => {

    //Arreglo que contiene la lista de tareas
    //antes const tasks = [...] porque era una variable normal
    //tasks → contiene el estado actual
    //setTasks → sirve para actualizarlo
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Create a react project",
            hour: "5:23 AM",
            date: "01/06/2022",
            completed: false
        },
        {
            id: 2,
            title: "Learn React <3",
            hour: "5:22 AM",
            date: "05/06/2022",
            completed: false
        },
        {
            id: 3,
            title: "Create a Todo App",
            hour: "5:21 AM",
            date: "08/06/2022",
            completed: false
        },
        {
            id: 4,
            title: "Create a lIST",
            hour: "5:23 AM",
            date: "03/06/2022",
            completed: false
        }

    ])

    //función para crear una nueva tarea
    function addTask(taskTitle) {
        const newTask = {
            id: tasks.length + 1, //genera un nuevo id para cada tarea length es el número de elementos en el arreglo
            title: taskTitle,
            hour: "10:00 AM",
            date: "15/05/2026"

        }
        setTasks([...tasks, newTask])
        //...tasks -> Spread operator: copia todos los elementos del array
        //actualización de estado
        //toma todas las tareas anteriores y agrega una nueva al final

    }
    //función para eliminar tarea según su id
    function deleteTask(id) {
        const updateTasks = tasks.filter((task) => task.id !== id)
        //filter recorre el array y agrega uno nuevo
        //solo conserva las tareas cuyo id sea diferente a la tarea que queremos eliminar
        // task.id !== id -> deja todas las tareas menos la del id
        setTasks(updateTasks)
        //actualiza el estado con el nuevo arreglo

    }
    //función para marcar o desmarcar una tarea como completada
    //recibe el id de la tarea seleccionada
    function toogleTask(id) {
        //map recorre todas las tareas y crea un nuevo arreglo
        const updateTasks = tasks.map((task) => {
            //si el id coincide con la tarea seleccionada
            if (task.id === id) {
                //Se crea una copia de la tarea
                //y se cambia el valor de completed
                return {
                    ...task, //...task copia todas las propiedades del objeto original
                    completed: !task.completed // se modifica la propiedad completed
                }
            }
            //las demás tareas permanecen iguales
            return task
        })
        //actualiza el estado con el nuevo arreglo
        setTasks(updateTasks)

    }

    //función para editar el título de una tarea
    //recibe el id de la tarea que se quiere modificar
    function editTask(id) {

        //abre una ventana para que el usuario escriba el nuevo título
        const newTitle = prompt("Editar tarea")

        //si el usuario cancela o no escribe nada, termina la función
        if (!newTitle) return

        //map recorre todas las tareas y crea un nuevo arreglo
        const updateTasks = tasks.map((task) => {

            //si encuentra la tarea con el id seleccionado
            if (task.id === id) {

                //crea una copia de la tarea y actualiza solo el título
                return {
                    ...task, //copia todas las propiedades de la tarea original
                    title: newTitle //reemplaza el título anterior por el nuevo
                }
            }

            //las demás tareas permanecen sin cambios
            return task
        })

        //actualiza el estado con el nuevo arreglo de tareas
        setTasks(updateTasks)
    }

    return (
        <div className="app-container">
            {/* todoheader recibe la función addTask para agregar nuevas tareas */}
            <TodoHeader addTask={addTask} />

            {/* Lista de tareas
             recibe:
            - tasks -> arreglo de tareas
            - deleteTask -> función para eliminar tareas
            - toggleTask -> función para marcar/desmarcar tareas 
            - editTask -> función para editar tarea */}
            <TodoList tasks={tasks} deleteTask={deleteTask} toogleTask={toogleTask} editTask={editTask} />
        </div>
    )
}