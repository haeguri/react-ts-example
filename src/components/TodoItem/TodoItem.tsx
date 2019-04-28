import * as React from "react";
import styled from "styled-components";
import { Todo } from "../../models";
import CheckBox from '../CheckBox';

const Wrapper = styled.li`
  font-size: 1rem;
  text-decoration: ${(props: { isComplete: boolean }) => (props.isComplete ? "line-through" : "none")};
  padding: 0.35em 0.6em;
`;

interface TodoItemProps extends Todo {
  key: string;
  onClick: (id: number) => void;
}

export default class TodoItem extends React.Component<TodoItemProps> {
  render() {
    const { isComplete, task, onClick, id } = this.props;

    return (
      <Wrapper isComplete={isComplete}>
        <CheckBox id={String(id)} checked={isComplete} onClick={() => onClick(id)} />
        <span>{task}</span>
      </Wrapper>
    );
  }
}
