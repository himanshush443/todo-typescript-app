import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import {Todo} from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  
  const onreadystatechange = (data: string) => {
    if(!data)
      return;
    if(todos.find(todo => todo.text===data)) {
      alert('This todo is already present at position: '+ (todos.findIndex(todo => todo.text===data)+1))
      return;
    }
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.floor(Math.random()*100).toString(), text: data}
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
      <TodoList items={todos} DeleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;

