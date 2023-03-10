import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([todo,...todos]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>You Have {todos.length} Task</h1>
      <div className="input-wrapper">
        <div className="todo-add">
          <form onSubmit={addTodo}>
            <input
              id="input-todo"
              type="text"
              name="todo"
              placeholder="Create a new task"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
            <button type="submit" className="add-button" >
              Add
            </button>
          </form>
        </div>

        {todos?.length > 0 ? (
          <ul className="todo-list">
            <h2>Task List</h2>
            {todos.map((todo, index) => (
              <div className="todo">
                <li className="todo-item" key={index}>
                  {" "}
                  {todo}{" "}
                </li>
                <button
                  className="delete-button"
                  onClick={() => {
                    deleteTodo(todo);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
