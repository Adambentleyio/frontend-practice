import React, { useContext } from "react";
import TodoItem from "../components/TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <li key={item.id}>
          <TodoItem
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
