/* eslint-disable react/prop-types */
import { StylesTodo } from './todo.styles.js'
import Lixeira from '../Icons/Lixeira.jsx'
import Check from '../Icons/Check.jsx'
const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <StylesTodo
            className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTodo(todo.id)}><Check /></button>
                <button className="remove" onClick={() => removeTodo(todo.id)}><Lixeira /></button>
            </div>
        </StylesTodo>
    )
}

export default Todo