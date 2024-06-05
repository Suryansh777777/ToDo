import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import Todos from "./components/Todos";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:3000/todo");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []); // empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
