import React from 'react';
import './TodoList.css';

export interface Todo{id: string, text: string}

interface TodoListProps {
    items: Array<Todo>;
    DeleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = props => {
    const {DeleteTodo} = props
    return (
        <ul>
            {props.items.map((todo,index) => (
                <li key={todo.id}>
                    <span>{index+1}</span>
                    <span>{todo.text}</span>
                    <button onClick={DeleteTodo.bind(null, todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
