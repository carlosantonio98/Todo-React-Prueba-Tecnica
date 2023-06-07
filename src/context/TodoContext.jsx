import { createContext } from 'react';


export const TodoContext = createContext({
    todoState: [],
    onNewTodo: () => {},
    onDeleteTodo: () => {},
    onToggleTodo: () => {},
});