import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, updateTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </ul>
    );
}
// aqu[i va algo]
export default TodoList;
