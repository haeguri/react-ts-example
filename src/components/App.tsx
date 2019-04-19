import * as React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm/TodoForm';

export default class App extends React.Component {
    render() {
        return (
            <>
                <TodoForm />
                <TodoList />
            </>
        )
    }
}