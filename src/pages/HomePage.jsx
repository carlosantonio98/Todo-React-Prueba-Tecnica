import { useContext } from 'react';
import { TodoContext } from '../context';
import { TodoAdd, TodoList } from '../components';

export const HomePage = () => {
    const { todoState } = useContext( TodoContext );

    return (
        <>
            <div className="container">
                <h1>Prueba técnica</h1>
                <small>Carlos Antonio Camacho Alvarez</small>
                <hr />

                <div>
                    <h3>Nueva tarea</h3>
                    <TodoAdd />
                </div>

                <div>
                    <h3>Tareas</h3>
                    {
                        !todoState.length ?
                        <div className="card mb-3">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <span>Sin tareas...</span>
                            </div>
                        </div> : ''
                    }
                    {
                        !!todoState.length &&
                        <TodoList />
                    }
                </div>
            </div>
        </>
    )
}
