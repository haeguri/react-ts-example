import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-decoration: ${(props: {isComplete: boolean}) => (props.isComplete ? "line-through" : "none")};
  color: red;
`;

interface TodoItemProps {
  key: string;
  isComplete: boolean;
  content: string;
}

export default class TodoItem extends React.Component<TodoItemProps, {}> {
  render() {
    const { isComplete, content } = this.props;

    return <Wrapper isComplete={isComplete}>{content}</Wrapper>;
  }
}
