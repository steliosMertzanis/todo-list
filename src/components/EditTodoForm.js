import React, { useState } from "react";

function EditTodoForm({ editTodo, task }) {
  const [input, setInput] = useState(task.task);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    setInput("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={input}
        placeholder="Update Task"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
}

export default EditTodoForm;
