export default function AddTodo({ onAdd, title, setTitle, editIndex }) {
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {editIndex ? (
        <button onClick={onAdd}>SAVE</button>
      ) : (
        <button onClick={onAdd}>ADD</button>
      )}
    </div>
  );
}
