import React, { useState } from 'react';
import "./../App.css"
function TodoItem({ todo, deleteTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleUpdate = () => {
        updateTodo(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <li className="itemList">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Actualizar</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                </>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
        </li>
    );
}

export default TodoItem;
