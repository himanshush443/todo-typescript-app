import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import {Todo} from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const onreadystatechange = (data: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: data}
    ]);
  }

  const DeleteTodo = (id: string): void => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <NewTodo updateTodo={onreadystatechange} />
      <TodoList items={todos} DeleteTodo={DeleteTodo}/>
    </div>
  );
}

export default App;
