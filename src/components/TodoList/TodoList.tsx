import * as React from 'react';
import { observer } from "mobx-react";
import TodoItem from "../TodoItem";
import TodoStore from "../../TodoStore";
import { Todo } from '../../models';

interface TodoListProps {
  store: TodoStore;
}

// const generateKey = (id: string): string => {
//   console.log('todo-item-' + id);
//   return 'todo-item-' + id;
// }

@observer
export default class TodoList extends React.Component<TodoListProps> {
  render() {
    const todoStore = this.props.store;
    return (
      <ul>
        {todoStore.todoList.items.map((item: Todo) => (
          <TodoItem key={String(item.id)} task={item.task} isComplete={item.isComplete}/>
        ))}
      </ul>
    );
  }
}
