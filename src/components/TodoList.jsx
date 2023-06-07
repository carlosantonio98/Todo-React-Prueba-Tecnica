import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todoState } = useContext( TodoContext );

    return (
        todoState.map(task => (
            <TodoItem key={ task.id } task={ task } />
        ))
    )
}
