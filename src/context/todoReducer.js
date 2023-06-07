import { todoTypes } from '../types';

export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {

        case todoTypes.newTodo:
            return [ ...initialState, action.payload ];

        case todoTypes.deleteTodo:
            return initialState.filter( todo => todo.id != action.payload );

        case todoTypes.toggleTodo:
            return initialState.map( todo => {
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }
}