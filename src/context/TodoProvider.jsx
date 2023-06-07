
import { useReducer } from 'react';
import { TodoContext, todoReducer } from './';
import { todoTypes } from '../types';

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {

    const [ todoState, dispatch ] = useReducer( todoReducer, [] );

    const onNewTodo = ( todo ) => {
        const action = { 
            type: todoTypes.newTodo, 
            payload: todo
        }

        dispatch(action);
    }

    const onDeleteTodo = ( id ) => {
        dispatch({
            type: todoTypes.deleteTodo,
            payload: id
        });
    }

    const onToggleTodo = ( id ) => {
        dispatch({
            type: todoTypes.toggleTodo,
            payload: id
        });
    }

    return (
        <TodoContext.Provider value={{
            todoState,

            // methods
            onNewTodo,
            onDeleteTodo,
            onToggleTodo,
        }}>
            { children }
        </TodoContext.Provider>
    );
}