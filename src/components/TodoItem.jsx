import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { TodoBadge } from './';
import { TodoContext } from '../context';

export const TodoItem = ({ task }) => {
    const { onDeleteTodo, onToggleTodo } = useContext( TodoContext );

    const onDelete = ( id ) => {
        if (!window.confirm('¿Estas seguro de querer eliminar la tarea?')) return;
        onDeleteTodo( id );
    }

    const onToggle = ( id ) => {
        onToggleTodo( id );
    }

    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <TodoBadge done={ task.done } />
                    <p className={ task.done ? 'text-decoration-line-through' : '' } >{ task.task }</p>
                </div>
                <div className='d-flex'>
                    <div className="me-3">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input me-3" onClick={ () => onToggle( task.id ) } />
                            Marcar como completado
                        </label>
                    </div>

                    <button type="submit" className="btn btn-sm btn-danger" onClick={ () => onDelete( task.id ) }>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

TodoItem.propTypes =  {
    task: PropTypes.object
}
