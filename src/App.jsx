/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Todo from './components/Todo/Todo'
import TodoForm from './components/Form/TodoForm'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import { StylesApp } from './app.styles'
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar Trello",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Regar as Samambaias",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const [search, setSearch] = useState('')
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('Asc')

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const startEditing = (id) => {
    console.log("Iniciando edição para a tarefa com ID:", id);
    setEditingTodoId(id);
  };

  const saveEdit = (id, newText, newCategory) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newText,
          category: newCategory,
        };
      }
      return todo;
    });

    setTodos(newTodos);
    setEditingTodoId(null);
  };



  return (
    <StylesApp className='app'>
      <h1 className='titulo'>To-Do List Hacker</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) => filter === 'All' ? true : filter === 'Completed' ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
            <React.Fragment key={todo.id}> {/* Adicionei um React.Fragment para envolver os elementos */}
              {editingTodoId === todo.id ? (
                // Renderizar no modo de edição
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                  startEditing={startEditing}
                  saveEdit={saveEdit}
                  editingTodoId={editingTodoId}
                />
              ) : (
                // Renderizar no modo de visualização
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                  startEditing={startEditing}
                  saveEdit={saveEdit}
                  editingTodoId={null}
                />
              )}
            </React.Fragment>
          ))}
      </div>

      <Search search={search} setSearch={setSearch} />
    </StylesApp>

  )
}

export default App
