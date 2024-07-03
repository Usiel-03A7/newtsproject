import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  //Iniciamos el array para ingresar las tareas
  const [todos, setTodos] = useState([]);

  //Agregamos las tareas en el array todos
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  //Eliminamos el elemento en el array por id

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // Similar al Eliminar pero actualizando mediante el id
  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: updatedTodo } : todo))
    );
  };

  return (
    <div className="App">
      <h1>Listado de tareas por hacer de Usiel</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <button>WW's no opcional, obligatorio</button>
    </div>
  );
}

export default App;
