/* eslint-disable react/prop-types */
import { useState } from 'react';
import { StylesTodo } from './todo.styles.js';
import Lixeira from '../Icons/Lixeira.jsx';
import Check from '../Icons/Check.jsx';


const Todo = ({ todo, removeTodo, completeTodo, startEditing, editingTodoId, saveEdit }) => {
    const [newText, setNewText] = useState(todo.text);
    const [newCategory, setNewCategory] = useState(todo.category);

    const cancelEdit = () => {
        setNewText(todo.text);
        setNewCategory(todo.category);
        startEditing(null);
    };

    if (editingTodoId === todo.id) {
        return (
            <div>
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
                <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button onClick={() => saveEdit(todo.id, newText, newCategory)}>Salvar</button>
                <button onClick={() => cancelEdit()}>Cancelar</button>
            </div>
        );
    } else {
        return (
            <StylesTodo
                className="todo"
                style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
            >
                <div className="content">
                    <p>{todo.text}</p>
                    <p className="category">({todo.category})</p>
                </div>
                <div>
                    <button className="complete" onClick={() => completeTodo(todo.id)}><Check /></button>
                    <button className="remove" onClick={() => removeTodo(todo.id)}><Lixeira /></button>
                    <button className='edit' onClick={() => startEditing(todo.id)}>Editar</button>
                </div>
            </StylesTodo>
        );
    }
};

export default Todo;
