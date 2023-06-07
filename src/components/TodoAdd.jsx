import { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { TodoContext } from '../context/TodoContext';

export const TodoAdd = () => {
    const [ errors, setErrors ] = useState( null );

    const { formState, onInputChange, onResetForm } = useForm({
        id: null,
        task: '',
        done: false
    });

    const { onNewTodo } = useContext( TodoContext );

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        if (!formState.task) {
            setErrors(['El campo de tarea es requerido' ]);
            return;
        }

        onNewTodo({
            ...formState,
            id: new Date().getTime() * 3,
            done: false,
        });
        
        setErrors( null );
        onResetForm();
    }

    return (
        <>
            {
                errors && 
                <div className='alert alert-danger'>
                    {
                        errors.map(error => (
                            <span key={error}>{error}</span>
                        ))
                    }
                </div>
            }
            <form className="mb-3" onSubmit={ onSubmit }>
                <div className="mb-3">
                    <label htmlFor="taskInput" className="form-label">Tarea</label>
                    <input type="text" className="form-control" id="taskInput" placeholder="Ingrese una nueva tarea" name="task" value={ formState.task } onChange={ onInputChange } />
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
            </form>
        </>
    )
}
