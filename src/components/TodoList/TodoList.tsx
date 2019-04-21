import * as React from 'react';
import { observer } from "mobx-react";
import TodoItem from "../TodoItem";
import { Todo, TodoStore } from "../../models/TodoStore";

interface TodoListProps {
  store: TodoStore;
}

const generateKey = (id: string): string => {
  console.log('todo-item-' + id);
  return 'todo-item-' + id;
}

@observer
export default class TodoList extends React.Component<TodoListProps> {
  render() {
    const todoStore = this.props.store;
    return (
      <>
        {todoStore.todos.map((item: Todo) => (
          <TodoItem key={generateKey(item.id)} task={item.task} isComplete={item.isComplete}/>
        ))}
      </>
    );
  }
}
