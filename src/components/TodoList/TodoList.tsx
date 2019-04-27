import * as React from 'react';
import { observer } from "mobx-react";
import styled from 'styled-components';

import TodoItem from "../TodoItem";
import TodoStore from "../../TodoStore";
import { Todo } from '../../models';

interface TodoListProps {
  store: TodoStore;
}

const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;

@observer
export default class TodoList extends React.Component<TodoListProps> {
  handleOnTodoCheck = (id: number) => {
    this.props.store.toggleStatus(id);
  }

  render() {
    const todoStore = this.props.store;
    return (
      <StyledUl>
        {todoStore.todoList.items.map((item: Todo) => (
          <TodoItem 
            key={String(item.id)}
            id={item.id}
            task={item.task}
            isComplete={item.isComplete}
            onClick={this.handleOnTodoCheck}
          />
        ))}
      </StyledUl>
    );
  }
}
