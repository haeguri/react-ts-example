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
}

export default class TodoItem extends React.Component<TodoItemProps> {
  render() {
    const { isComplete, task } = this.props;

    return (
      <Wrapper isComplete={isComplete}>
        <CheckBox checked={true} />
        <span>{task}</span>
      </Wrapper>
    );
  }
}
