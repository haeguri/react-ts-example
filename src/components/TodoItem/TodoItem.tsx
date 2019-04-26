import * as React from "react";
import styled from "styled-components";
import { Todo } from "../../models";

const Wrapper = styled.li`
  text-decoration: ${(props: {isComplete: boolean}) => (props.isComplete ? "line-through" : "none")};
  color: red;
`;

interface TodoItemProps extends Todo {
  key: string;
}

export default class TodoItem extends React.Component<TodoItemProps> {
  render() {
    const { isComplete, task } = this.props;

    return <Wrapper isComplete={isComplete}>{task}</Wrapper>;
  }
}
