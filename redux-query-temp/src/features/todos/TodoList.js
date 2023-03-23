import React, { useState } from 'react'
import {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation } from '../api/apiSlice'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Todo from './Todo'

const TodoList = () => {

    const [newTodo, setNewTodo ] = useState('')

    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery()

    const [addTodo] = useAddTodoMutation()
    const [updateTodo] = useUpdateTodoMutation()
    const [deleteTodo] = useDeleteTodoMutation()


    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({userId: 1, title: newTodo, completed: false})
        setNewTodo('')
    }

    // create controlled form to add new item
    const newItemSection =

            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="new-todo">Enter a new todo</label>
                <div>
                    <input value={newTodo} onChange={e => setNewTodo(e.target.value)} type="text" />
                </div>
                <button type="submit"> <FontAwesomeIcon icon={faUpload} /></button>
            </form>

    let content;
    // define conditional content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = todos.map( todo => {
            return (
            <Todo key={todo.id} todo={todo} />
        )
        })
    } else if (isError) {
        content = <p>{error}</p>
    }

  return (
    <div>
    {newItemSection}
    {content}
    </div>
  )
}

export default TodoList