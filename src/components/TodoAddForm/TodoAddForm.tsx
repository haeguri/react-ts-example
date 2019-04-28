import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import styled from 'styled-components';

import TodoStore from "../../TodoStore";
import Button from '../Button';
import Input from '../Input';

interface TodoFormProps {
  store: TodoStore;
}

const StyledForm = styled.form`
  .save-btn {
    margin-left: 10px;
  }
`

@observer
export default class TodoForm extends React.Component<TodoFormProps> {
  @observable task: string = '';

  @action
  private handleOnTaskChange = (value: string): void => {
    this.task = value;
  }

  @action
  private handleOnTodoSave = () => {
    this.props.store.add(this.task);
    this.task = '';
  }

  render() {
    return (
      <StyledForm>
        <Input value={this.task} onChange={this.handleOnTaskChange} placeholder="할일을 입력하세요." />
        <Button className="save-btn" onClick={this.handleOnTodoSave}>저장</Button>
      </StyledForm>
    );
  }
}
