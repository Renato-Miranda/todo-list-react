/* eslint-disable react/prop-types */

const Todo = ({ todo }) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button>Completar</button>
                <button>Del</button>
            </div>
        </div>
    )
}

export default Todo