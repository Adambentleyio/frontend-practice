import { useDeleteTodoMutation, useUpdateTodoMutation } from "../api/apiSlice"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Todo = ({ todo }) => {


const [updateTodo] = useUpdateTodoMutation()
const [deleteTodo] = useDeleteTodoMutation()

    return (
    <article key={todo.id}>
            <div className="todo">
                <input type="checkbox"
                checked={todo.completed}
                id={todo.id}
                onChange={() => updateTodo({...todo, completed: !todo.completed})} />
                <label htmlFor={todo.id}>{todo.title}</label>
            </div>
            <button onClick={() => deleteTodo({id: todo.id})}><FontAwesomeIcon icon={faTrash} /></button>
        </article>
  )
}

export default Todo