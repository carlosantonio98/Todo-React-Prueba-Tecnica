
import { TodoProvider } from './src/context';
import { HomePage } from './src/pages';


export const TodoApp = () => {
    return (
        <TodoProvider>
            <HomePage />
        </TodoProvider>
    )
}
