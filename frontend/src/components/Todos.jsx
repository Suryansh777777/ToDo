import React from "react";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id} className="todo">
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
          <p>{todo.completed ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
