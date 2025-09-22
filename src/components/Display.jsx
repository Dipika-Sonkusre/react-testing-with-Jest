export default function Display({ todos, onDelete, onEdit }) {
  return (
    <div className="todo-details">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
            <button onClick={() => onEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
