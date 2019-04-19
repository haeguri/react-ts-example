import * as React from "react";
import TodoItem from "../TodoItem";
import { Task } from "../../models";

const samples = [
  {
    id: "1",
    content: "회의 하기",
    isComplete: true
  },
  {
    id: "2",
    content: "메일 확인하기",
    isComplete: false
  },
  {
    id: "3",
    content: "커피 마시기",
    isComplete: true
  },
  {
    id: "4",
    content: "이슈 확인하기",
    isComplete: true
  },
  {
    id: "5",
    content: "TypeScript 공부하기",
    isComplete: true
  },
  {
    id: "6",
    content: "MobX 공부하기",
    isComplete: false
  }
];

export default class TodoList extends React.Component {
  render() {
    return (
      <>
        {samples.map(item => (
          <TodoItem key={item.id} content={item.content} isComplete={item.isComplete}/>
        ))}
      </>
    );
  }
}
