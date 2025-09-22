import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Display from "./components/Display";

import "./App.css";

const initialData = [{ id: 1, title: "Sleep" }];

function App() {
  const [todos, setTodos] = useState(initialData);
  const [title, setTitle] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (title === "") {
      alert("Field can not be empty!");
    } else {
      if (editIndex) {
        setTodos(
          todos.map((prev) =>
            prev.id === editIndex ? { ...prev, title: title } : prev
          )
        );
      } else {
        setTodos([
          {
            id: new Date().getTime().toString(),
            title: title,
          },
          ...todos,
        ]);
      }
    }
    setTitle("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (id) => {
    setEditIndex(id);
    const editedTodo = todos.find((todo) => todo.id === id);
    setTitle(editedTodo.title);
  };

  return (
    <main>
      <h1>Todo App</h1>
      <AddTodo
        onAdd={handleAdd}
        title={title}
        setTitle={setTitle}
        editIndex={editIndex}
      />
      <Display todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </main>
  );
}

export default App;
