import * as React from 'react';
import { TodoStore } from "../../models/TodoStore";
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface TodoFormProps {
  store: TodoStore;
}

@observer
export default class TodoForm extends React.Component<TodoFormProps> {
  @observable task: string = '';

  private handleOnTaskChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    this.task = e.currentTarget.value;
  }

  private handleOnTodoSave = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    this.props.store.addTodo(this.task);
    this.task = '';

    e.preventDefault();
  }

  render() {
    return (
      <form>
        <input value={this.task} onChange={this.handleOnTaskChange} placeholder="할일을 입력하세요." />
        <button onClick={this.handleOnTodoSave}>저장</button>
      </form>
    );
  }
}
