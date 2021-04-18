import React, {useRef} from 'react';
import './NewTodo.css';

interface UpdateTodo {
    updateTodo: (enteredText: string) => void
}

const NewTodo: React.FC<UpdateTodo> = props => {
    const textInputref = useRef<HTMLInputElement>(null);
    const TodoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputref.current!.value;
        props.updateTodo(enteredText);
        textInputref.current!.value = '';
    };

    return (
    <form onSubmit={TodoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text"></label>
            <input type="text" id="todo-text" ref={textInputref}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>
    );
}

export default NewTodo;