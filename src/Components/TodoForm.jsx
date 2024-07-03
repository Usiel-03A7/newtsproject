import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({
      id: Math.random(),
      text: todo,
    });
    setTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Agregar Tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;
