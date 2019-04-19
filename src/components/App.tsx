import * as React from 'react';
import TodoList from './TodoList/TodoList';
import TodoForm from './TodoForm/TodoForm';

/**
 * 1. Model을 정의한다.
 * 
 */

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