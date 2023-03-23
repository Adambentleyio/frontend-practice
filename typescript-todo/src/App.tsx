import "./App.css";
import Todos from "./components/Todos";
import NewTodo from ".//components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <TodosContextProvider>
      <h1>React Typescript</h1>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
